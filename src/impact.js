/* eslint-disable operator-linebreak */
const impact = (data) => {
  const bedForCovid19 = data.totalHospitalBeds * (35 / 100);
  const { avgDailyIncomePopulation } = data.region;
  const incomePopulationPercent =
    (avgDailyIncomePopulation * data.population) / 100;

  const durationInDays = () => {
    switch (data.periodType) {
      case 'days': {
        return 2 ** Math.floor(data.timeToElapse / 3);
      }
      case 'weeks': {
        const days = data.timeToElapse * 7;
        return 2 ** Math.floor(days / 3);
      }
      case 'months': {
        const days = data.timeToElapse * 30;
        return 2 ** Math.floor(days / 3);
      }
      default: {
        return 0;
      }
    }
  };
  const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * durationInDays();
  const severeCasesByRequestedTime = infectionsByRequestedTime * (15 / 100);
  const hospitalBedsByRequestedTime = Math.trunc(
    bedForCovid19 - severeCasesByRequestedTime
  );
  const casesForICUByRequestedTime = infectionsByRequestedTime * (5 / 100);
  const casesForVentilatorsByRequestedTime =
    infectionsByRequestedTime * (2 / 100);
  const dollarsInFlight = Number(
    (infectionsByRequestedTime
    * incomePopulationPercent
    * data.region.avgDailyIncomeInUSD
    * 30).toFixed(2)
  );
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
};

export default impact;
