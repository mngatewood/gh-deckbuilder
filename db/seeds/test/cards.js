const cardsData = require('../../../cards_table_data');
const joinsData = require('../../../joins_table_data');
const environment = process.env.NODE_ENV || 'test'
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

const createCard = (knex, card) => knex('cards').insert(card);
const createJoin = (knex, join) => knex('joins').insert(join);

exports.seed = (knex, Promise) => database.migrate.rollback()
  .then(() => database.migrate.latest())

  // delete all records in all tables
  .then(() => knex('cards').del())
  .then(() => knex('decks').del())
  .then(() => knex('joins').del())

  // populate cards table
  .then(() => {
    const cardsPromises = [];

    cardsData.forEach((card) => {
      cardsPromises.push(createCard(knex, card));
    });

    return Promise.all(cardsPromises);
  })

  // add two records to decks table
  .then(() => {
    return Promise.all([
      knex('decks').insert({ name: 'Brute Deck', class: 'Brute', level: 1, user: 'guest' }),
      knex('decks').insert({ name: 'Cragheart Deck', class: 'Cragheart', level: 2, user: 'guest' }),
      knex('decks').insert({ name: 'Mindthief Deck', class: 'Mindthief', level: 9, user: 'guest' })
    ]);
  })

  // populate joins table with 2 decks, 10 cards each
  .then(() => {
    const joinsPromises = [];

    joinsData.forEach((join) => {
        joinsPromises.push(createJoin(knex, join));
    });

    return Promise.all(joinsPromises);
  })

  .catch(error => console.log(`Error seeding card data: ${error}`)); // eslint-disable-line
