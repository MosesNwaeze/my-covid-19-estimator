/* eslint-disable no-console */
const http = require('http');
const app = require('./src/backend/app');

const server = http.createServer(app);
const portValue = process.env.PORT || '3000';
app.set('port', portValue);
server.on('error', () => { console.log(`Unable to connect to the server at the moment on port: ${app.get('port')}`); });
server.on('listening', () => { console.log(`listening on port ${app.get('port')}`); });
server.listen(app.get('port'));
