exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('decks', (table) => {
      table.string('user');
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('decks', (table) => {
      table.dropColumn('user');
    })
  ]);
};