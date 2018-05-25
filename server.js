const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
require('dotenv').config();

app.use(bodyParser.json());
// app.use('/', express.static('src'));

app.set('port', process.env.PORT || 3000);
// app.set('secretKey', process.env.KEY);
app.locals.title = 'Gloomhaven Deck Builder';

app.get('/', (request, response) => {
  console.log("success");
  response.sendStatus(200);
});



app.listen(app.get('port'), () => {
  // eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
