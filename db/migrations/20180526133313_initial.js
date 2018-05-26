
exports.up = function (knex, Promise) {

  return Promise.all([
    knex.schema.createTable('cards', (table) => {
      table.increments('id').primary();
      table.string('class');
      table.string('name');
      table.integer('initiative');
      table.string('top_action', 500);
      table.string('bottom_action', 500);
      table.string('image_url');
      table.integer('card_level');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('decks', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('class')

      table.timestamps(true, true);
    }),

    knex.schema.createTable('joins', (table) => {
      table.increments('id').primary();
      table.integer('card_id').unsigned();
      table.foreign('card_id').references('cards.id');
      table.integer('deck_id').unsigned();
      table.foreign('deck_id').references('decks.id');

      table.timestamps(true, true);
    })

  ])

};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('joins'),
    knex.schema.dropTable('decks'),
    knex.schema.dropTable('cards')
  ]);
};


