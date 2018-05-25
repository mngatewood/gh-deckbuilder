const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Gloomhaven Deck-Builder';

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on port ${app.get('port')}`); //eslint-disable-line
})

app.get('/api/v1/cards/:class', (request, response) => {

  database('cards').where('class', request.params.class).select()
  .then( cards => {
    if (!cards.length) {
      return response.status(404).json('No matches found');
    } else {
      return response.status(200).json(cards);
    }
  })
  .catch(error => response.status(500)
    .json('Internal server error ' + error));
})



module.exports = {app, database}