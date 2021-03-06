/* eslint-disable operator-linebreak */
const impact = (data) => {
  const bedForCovid19 = data.totalHospitalBeds * (35 / 100);
  const { avgDailyIncomePopulation } = data.region;
  const incomeDays = () => {
    switch (data.periodType) {
      case 'days': {
        return data.timeToElapse;
      }
      case 'weeks': {
        return data.timeToElapse * 7;
      }
      case 'months': {
        return data.timeToElapse * 30;
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
  const hospitalBedsByRequestedTime = Math.trunc(
    bedForCovid19 - severeCasesByRequestedTime
  );
  const casesForICUByRequestedTime = Math.trunc(
    infectionsByRequestedTime * (5 / 100)
  );
  const casesForVentilatorsByRequestedTime = Math.trunc(
    infectionsByRequestedTime * (2 / 100)
  );
  const dollarsInFlight =
  Math.trunc(
    (infectionsByRequestedTime *
      avgDailyIncomePopulation *
      data.region.avgDailyIncomeInUSD) /
    incomeDays()
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

module.exports = impact;
