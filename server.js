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

app.get('/api/v1/decks/:id', (request, response) => {
  const deckId = request.params.id;

  database('decks').where('id', deckId).select()
    .then( deck => {
      if(deck.length) {
        database('joins').where('deck_id', deckId).select()
        .then(cards => {
          if(cards.length) {
            let cardsArray = [];
            cards.forEach(card => {
              cardsArray.push(card.card_id)
            })
            return response.status(200).json({
              name: deck[0].name,
              cards: cardsArray
            })
          } else {
            return response.status(404).json('No matching cards found.');
          }
        })
      } else {
        return response.status(404).json('No matching decks found.');
      }
    })
    .catch(error => response.status(500)
      .json('Internal server error ' + error));
})

app.post('/api/v1/decks', (request, response) => {

  const deck = request.body;
  const deckName = request.body.name; 
  const cardArray = request.body.cards;

  for (let requiredParameter of ['name', 'cards', ]) {
    if (!deck[requiredParameter]) {
      return response.status(422)
        .send(`You are missing a ${requiredParameter} parameter.`);
    }
  }

  if (!cardArray.length) {
    return response.status(422)
      .send('You must have at least one card in your deck.');
  }

  database('decks').insert({ "name": deckName }, 'id')
  .then(deckId => {
    cardArray.forEach(card => {
      database('joins').insert(
        {
          deck_id: deckId[0],
          card_id: card
        }
      ).then(id => id)
    })

    return response.status(200).json(`Successfully added ${deckName} deck to database.`);
  })
  .catch(error => {
    return response.status(500).json('Internal server error' + error )
  })
})



module.exports = {app, database}