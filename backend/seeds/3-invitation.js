/*
    set the demo data of invitation table
*/

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("invitation")
    .del()
    .then(function () {
      // Inserts seed entries - invitations
      return knex("invitation").insert([
        { invitationID: 1, requestID: 1, inviteUsername: "long" },
        { invitationID: 2, requestID: 2, inviteUsername: "charlie" },
        { invitationID: 3, requestID: 3, inviteUsername: "arthur" },
        { invitationID: 4, requestID: 4, inviteUsername: "jane" },
        { invitationID: 5, requestID: 5, inviteUsername: "harry" },
        { invitationID: 6, requestID: 3, inviteUsername: "long" },
        { invitationID: 7, requestID: 4, inviteUsername: "charlie" },
        { invitationID: 8, requestID: 5, inviteUsername: "arthur" },
        { invitationID: 9, requestID: 1, inviteUsername: "jane" },
        { invitationID: 10, requestID: 2, inviteUsername: "harry" },
        { invitationID: 11, requestID: 4, inviteUsername: "long" },
        { invitationID: 12, requestID: 5, inviteUsername: "charlie" },
        { invitationID: 13, requestID: 1, inviteUsername: "arthur" },
        { invitationID: 14, requestID: 2, inviteUsername: "jane" },
        { invitationID: 15, requestID: 3, inviteUsername: "harry" },
      ]);
    });
};
