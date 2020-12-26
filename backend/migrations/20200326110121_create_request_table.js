/*
    create the table of request
*/

exports.up = function (knex) {
  return knex.schema.createTable("request", (table) => {
    table.increments("requestID").primary();
    table.string("requestName");
    table.string("location");
    table.date("date").notNullable();
    table.time("startingTime").notNullable();
    table.time("endingTime").notNullable();
    table.string("createUser");
    table.boolean("stateVegetarian").defaultTo(0);
    table.boolean("stateFinish").notNullable().defaultTo(0);

    table.foreign("createUser").references("username").inTable("account");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("request");
};
