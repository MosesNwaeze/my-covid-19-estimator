import express from 'express';
import router from './route';


const app = express();
// CORS implementation
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Accept,Authorization,Content-Type,X-Requested-With,Content,Origin,Accept-Version');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE,PUT,OPTIONS');
  next();
});

app.use('/api/v1/on-covid-19', router);


export default app;
