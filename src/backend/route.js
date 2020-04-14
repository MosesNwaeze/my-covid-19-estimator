const express = require('express');
const covid19ImpactEstimator = require('../estimator');
// const connection = require('./model');

const router = express.Router();

const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: covid19ImpactEstimator(data)
  });
});
/** router.get('/json', (req, res) => {});
router.get('/xml', (req, res) => {});
router.get('/log', (req, res) => {});
router.post('/', (req, res) => {});* */

module.exports = router;
