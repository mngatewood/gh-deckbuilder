exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('decks', (table) => {
      table.integer('level');
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('decks', (table) => {
      table.dropColumn('level');
    })
  ]);
};