/*
 * MODULE NAME: KNEXFILE
 * PROGRAMMER: YUE KA LONG
 * VERSION: 1.0 (16 MAY 2020)
 *
 * PURPOSE: THIS IS THE KNEXFILE OF THE PLUGIN KNEX USE FOR SETTING ITS ENVIRONMENT
 *
 *
 */
module.exports = {
  development: {
    client: "mysql",
    version: "8.0.12",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "1234",
      database: "wysfyp_db",
    },
    debug: true,
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
