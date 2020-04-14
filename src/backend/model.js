/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/estimator', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connection is successful');
  })
  .catch(() => {
    console.log('connection is not successful');
  });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
