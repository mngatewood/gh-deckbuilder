// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/deckbuilder',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }

};
