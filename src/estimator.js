const covid19ImpactEstimator = (data) => {
  const availableHospitalBeds = data.totalHospitalBeds * (35 / 100);
  const percentageDailyPopulationIncome = data.region.avgDailyIncomePopulation;
  return {
    data,
    impact: {
      currentlyInfected: data.reportedCases * 10,
      get infectionsByRequestedTime() {
        return this.currentlyInfected * 1024;
      },
      get severeCasesByRequestedTime() {
        return this.infectionsByRequestedTime * (15 / 100);
      },
      get hospitalBedsByRequestedTime() {
        return availableHospitalBeds - this.severeCasesByRequestedTime;
      },
      get casesForICUByRequestedTime() {
        return this.infectionsByRequestedTime * (5 / 100);
      },
      get casesForVentilatorsByRequestedTime() {
        return this.infectionsByRequestedTime * (2 / 100);
      },
      get dollarsInFlight() {
        return (
          percentageDailyPopulationIncome
          * this.infectionsByRequestedTime
          * data.region.avgDailyIncomeInUSD
          * 30
        );
      }
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      get infectionsByRequestedTime() {
        return this.currentlyInfected * 1024;
      },
      get severeCasesByRequestedTime() {
        return this.infectionsByRequestedTime * (15 / 100);
      },
      get hospitalBedsByRequestedTime() {
        return availableHospitalBeds - this.severeCasesByRequestedTime;
      },
      get casesForICUByRequestedTime() {
        return this.infectionsByRequestedTime * (5 / 100);
      },
      get casesForVentilatorsByRequestedTime() {
        return this.infectionsByRequestedTime * (2 / 100);
      },
      get dollarsInFlight() {
        return (
          percentageDailyPopulationIncome
          * this.infectionsByRequestedTime
          * data.region.avgDailyIncomeInUSD
          * 30
        );
      }
    }
  };
};

export default covid19ImpactEstimator;
