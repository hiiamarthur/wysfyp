/*
    create the table of feedback
*/

exports.up = function (knex) {
  return knex.schema.createTable("feedback", (table) => {
    table.increments("id").primary();
    table.string("restaurantName").notNullable();
    table.string("opinion");
    table.string("rating");

    table
      .foreign("restaurantName")
      .references("restaurantName")
      .inTable("restaurant_details");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("feedback");
};
