/* eslint-disable no-console */
const submit = document.querySelector('.f1-buttons button');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = {
    population: Number(document.querySelector('#population').value),
    timeToElapse: Number(document.querySelector('#timeToElapse').value),
    reportedCases: Number(document.querySelector('#reportedCases').value),
    hospitalBeds: Number(document.querySelector('#totalHospitalBeds').value),
    periodType: document.querySelector('#periodType').value
  };
  console.log(formData);
  document.querySelector('p:nth-child(3)').style.display = 'block';
});
