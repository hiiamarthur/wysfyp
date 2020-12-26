/*
    create the table of restaurant_details
*/

exports.up = function (knex) {
  return knex.schema.createTable("restaurant_details", (table) => {
    table.string("restaurantName").primary();
    table.string("restaurantDestination");
    table.time("dailyOpeningTime");
    table.time("dailyClosingTime");
    table.time("holidayOpeningTime");
    table.time("holidayClosingTime");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("restaurant_details");
};
