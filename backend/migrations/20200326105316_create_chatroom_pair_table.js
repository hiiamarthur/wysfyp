/*
    create the table of chatroom_pair
*/

exports.up = function (knex) {
  return knex.schema.createTable("chatroom_pair", (table) => {
    table.increments("roomID").primary();
    table.string("username_A");
    table.string("username_B");

    table.foreign("username_A").references("username").inTable("account");
    table.foreign("username_B").references("username").inTable("account");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("chatroom_pair");
};
