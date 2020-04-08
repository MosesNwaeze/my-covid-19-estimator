const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: covid19ImpactEstimator.impact.currentlyInfected * 1024
  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: covid19ImpactEstimator.severeImpact.currentlyInfected * 1024
  }
});

export default covid19ImpactEstimator;
