/*
* COMPONENT NAME: SENDREQUESTSERVICES
* PROGRAMMER: LAU PING TUNG
* VERSION: 1.0 (11 DEC 2020)
*
* PURPOSE: SERVICES MEANS THAT DOING THE SERVICE EXACTLY IN HERE.
*/
const knex = require("knex")(require("../../knexfile.js")["development"]);

module.exports = {
  //fot geting all existing request
  queryRequest: async function(user) {
    let result = await knex.raw(`
        SELECT requestId,requestName,location,date,startingTime,endingTime FROM request
    `,
    );
    console.log(result[0]);
    return result[0];
  },
  //for geting all existing Invitation 
  queryInvitation: async function(user) {
    let result = await knex.raw(`
        SELECT invitationId,requestId,inviteUsername FROM invitation
    `,
    );
    console.log(result[0]);
    return result[0];
  },
  //for making a new request
  queryInsertRequestInfo: async function(obj) {
    await knex.raw(
      `
      INSERT INTO request(requestName,location,date,startingTime,endingTime,createUser,stateVegetarian)
      VALUE(?,?,?,?,?,?,?)
    `,
      [obj.name, obj.location,obj.date,obj.start,obj.end,obj.user,obj.state]
    );
    return;
  },
};
