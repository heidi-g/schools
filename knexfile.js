// Update with your config settings.
//comments
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'schools'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
