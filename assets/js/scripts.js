const submit = document.querySelector('.f1-buttons button');
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = {
    population: document.querySelector('#population').value,
    timeToElapse: document.querySelector('#"timeToElapse').value,
    reportedCases: document.querySelector('#reportedCases').value,
    hospitalBeds: document.querySelector('#totalHospitalBeds').value,
    periodType: document.querySelector('#periodType').value
  };
  // eslint-disable-next-line no-console
  console.log(formData);
});
