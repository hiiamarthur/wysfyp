/*
    create the table of chatroom_history
*/

exports.up = function (knex) {
  return knex.schema.createTable("chatroom_history", (table) => {
    table.increments("msgID").primary();
    table.integer("roomID").unsigned().notNullable();
    table.string("linetxt");
    table.timestamp("created_at", 6).defaultTo(knex.fn.now(6));

    table.foreign("roomID").references("roomID").inTable("chatroom_pair");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("chatroom_history");
};
