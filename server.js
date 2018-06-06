const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const path = require('path');

app.set('port', process.env.PORT || 8080);

app.locals.title = 'Gloomhaven Deck-Builder';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin",
    "*");
  response.header("Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE");
  response.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on port ${app.get('port')}`); //eslint-disable-line
});

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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
});

app.get('/api/v1/decks', (request, response) => {

  database('decks').select()
    .then( decks => {
      if (!decks.length) {
        return response.status(404).json('No decks found');
      } else {
        return response.status(200).json(decks);
      }
    })
    .catch(error => response.status(500)
      .json('Internal server error ' + error));
});

app.get('/api/v1/decks/:id', (request, response) => {
  const deckId = request.params.id;

  database('decks').where('id', deckId).select()
    .then( deck => {
      if (deck.length) {
        database('joins').where('deck_id', deckId).select()
          .then(cards => {
            if (cards.length) {
              let cardsArray = [];

              cards.forEach(card => {
                cardsArray.push(card.card_id);
              });
              return response.status(200).json({
                name: deck[0].name,
                class: deck[0].class,
                cards: cardsArray,
                level: deck[0].level,
                user: deck[0].user
              });
            } else {
              return response.status(404).json('No matching cards found.');
            }
          });
      } else {
        return response.status(404).json('No matching decks found.');
      }
    })
    .catch(error => response.status(500)
      .json('Internal server error ' + error));
});

app.post('/api/v1/decks', (request, response) => {
  const deck = request.body;
  const deckName = request.body.name;
  const className = request.body.class;
  const level = request.body.level;
  const cardArray = request.body.cards;
  const user = request.body.user;

  for (let requiredParameter of ['name', 'cards', 'class', 'level', 'user']) {
    if (!deck[requiredParameter]) {
      return response.status(422)
        .json(`You are missing a ${requiredParameter} parameter.`);
    }
  }

  if (!cardArray.length) {
    return response.status(422)
      .json('You must have at least one card in your deck.');
  }

  const checkInteger = (card) => {
    return Number.isInteger(card);
  };

  if (!cardArray.every(checkInteger)) {
    return response.status(422).json('Invalid card.');
  }

  database('decks').insert({
    "name": deckName,
    "class": className,
    "level": level,
    "user": user
  }, 'id')
    .then(deckId => {
      cardArray.forEach(card => {
        database('joins').insert(
          {
            deck_id: deckId[0],
            card_id: card
          }
        ).then(id => id);
      });
      return response.status(201)
        .json(`Deck ${deckName} was added to the database.`);
    })
    .catch(error => {
      return response.status(500).json('Internal server error' + error );
    });
});

app.delete('/api/v1/decks/:id', (request, response) => {
  const deckId = request.params.id;

  if (!Number.isInteger(parseInt(deckId))) {
    return response.status(422).json('ID is not an integer');
  }

  database('joins').where('deck_id', deckId).del()
    .then(deleteCount => {
      if (deleteCount === 0) {
        return response.status(404).json(`No decks found with id ${deckId}.`);
      }
      database('decks').where('id', deckId).del()
        .then(deleteCount => {
          if (deleteCount === 0) {
            return response.status(404)
              .json(`No decks found with id ${deckId}.`);
          }
          return response.status(200)
            .json(`Successfully removed deck ${deckId} from database.`);
        });
    })
    .catch(error => {
      return response.status(500).json('Internal server error' + error );
    });
});

module.exports = {app, database};
