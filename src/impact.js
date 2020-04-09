const impact = (data) => {
  const percentageDailyPopulationIncome = Math.floor(data.region.avgDailyIncomePopulation);

  const bedIndays = () => {
    switch (data.periodType) {
      case 'days': {
        return data.totalHospitalBeds * (35 / 100);
      }
      case 'weeks': {
        return Math.floor(data.totalHospitalBeds * (35 / 100));
      }
      case 'months': {
        return data.totalHospitalBeds * (35 / 100);
      }
      default: {
        return 0;
      }
    }
  };

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
  const hospitalBedsByRequestedTime = bedIndays() - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = infectionsByRequestedTime * (5 / 100);
  const casesForVentilatorsByRequestedTime = infectionsByRequestedTime * (2 / 100);
  const dollarsInFlight = percentageDailyPopulationIncome
  * infectionsByRequestedTime
  * data.region.avgDailyIncomeInUSD
  * 30;
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
