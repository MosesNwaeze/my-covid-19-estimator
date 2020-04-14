const express = require('express');
// const mongoose = require('mongoose');
const xml = require('xml2js');
const covid19ImpactEstimator = require('../estimator');

const builder = new xml.Builder({
  renderOpts: { pretty: false }
});

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

router.post('/', (req, res) => {
  const { population } = req.body;
  const { timeToElapse } = req.body;
  const { reportedCases } = req.body;
  const { totalHospitalBeds } = req.body;
  const { periodType } = req.body;
  const { avgDailyIncomeInUSD } = req.body;
  const { avgDailyIncomePopulation } = req.body;

  res.status(200).json({
    status: 200,
    message: 'Data successfully captured',
    data: {
      population,
      timeToElapse,
      reportedCases,
      totalHospitalBeds,
      periodType,
      avgDailyIncomeInUSD,
      avgDailyIncomePopulation
    }
  });
});

router.get('/json', (req, res) => {
  res.type('application/json');
  res.status(200).json({
    status: 'success',
    data: covid19ImpactEstimator(data)
  });
});

router.get('/xml', (req, res) => {
  res.type('application/xml');
  res.status(200).send(builder.buildObject(covid19ImpactEstimator(data)));
});
router.get('/log', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ name });
});

module.exports = router;
