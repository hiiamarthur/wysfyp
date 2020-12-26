/*
    update the table schema of chatroom_pair
*/

exports.up = function (knex) {
  return knex.schema.table("chatroom_pair", (table) => {
    table.integer("requestID").unsigned().notNullable();

    table.foreign("requestID").references("requestID").inTable("request");
  });
};

exports.down = function (knex) {
  return knex.schema.table("chatroom_pair", (table) => {
    table.dropForeign("requestID");
    table.dropColumn("requestID");
  });
};
