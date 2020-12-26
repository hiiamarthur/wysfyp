/*
    create the table of invitation
*/

exports.up = function (knex) {
  return knex.schema.createTable("invitation", (table) => {
    table.increments("invitationID").primary();
    table.integer("requestID").unsigned().notNullable();
    table.string("inviteUsername").notNullable();

    table.foreign("requestID").references("requestID").inTable("request");
    table.foreign("inviteUsername").references("username").inTable("account");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("invitation");
};
