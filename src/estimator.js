const impact = require('./impact');
const severeImpact = require('./severeImpact');

const covid19ImpactEstimator = (data) => ({
  data,
  impact: impact(data),
  severeImpact: severeImpact(data)
});

module.exports = covid19ImpactEstimator;
