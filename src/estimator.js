const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      get infectionsByRequestedTime() {
        return this.currentlyInfected * 1024;
      }
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      get infectionsByRequestedTime() {
        return this.currentlyInfected * 1024;
      }
    }
  };
};


export default covid19ImpactEstimator;
