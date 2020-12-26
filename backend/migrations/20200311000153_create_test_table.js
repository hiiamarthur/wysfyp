/*
    create the table of test
*/

exports.up = function (knex, Promise) {
  return knex.schema.createTable("test", (table) => {
    table.increments();
    table.string("name");
    table.timestamp("created_at", 6).defaultTo(knex.fn.now(6));
    table.timestamp("updated_at", 6).notNullable().defaultTo(knex.fn.now(6));
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("test");
};
