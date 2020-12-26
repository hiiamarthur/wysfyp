/*
 * COMPONENT NAME: CHATROOMSERVICES
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE CHATROOM SERVICES OF THE EXPRESS.JS.
 *          SERVICES MEANS THAT DOING THE SERVICE EXACTLY IN HERE.
 *
 */

// set currUser to store the current user of the chatroom page
let currUser = [];

// import the node module 'knex' for doing the mySQL query
const knex = require("knex")(require("../../knexfile.js")["development"]);

module.exports = {
  // handling the socket services
  socket: {
    // handling services of the request of join room
    joinRoom: async function (data, socket, io) {
      // if the user already join a room before, leave the original room first
      if (currUser[data.username] != undefined) {
        socket.leave(currUser[data.username]["roomID"]);
      }
      // markdown the current online user and the room that the user in
      currUser[data.username] = {
        username: data.username,
        roomID: data.roomID,
        socketId: socket.id,
      };
      // join the room
      socket.join(currUser[data.username]["roomID"]);

      // get the chat histroy
      let msgRecord = await this.getMsgRecord(data.roomID);
      let boardMsg = "";
      for (let i = 0; i < msgRecord.length; i++) {
        boardMsg += `${msgRecord[i].linetxt}`;
      }
      // emit signal to front-end to get the history
      io.to(currUser[data.username]["socketId"]).emit("getHistory", boardMsg);
    },
    sendMsg: function (data, msg, io) {
      // set the board message
      let boardMsg = `${currUser[data.username]["username"]}: ${msg}\n`;
      this.recordMsg(currUser[data.username]["roomID"], boardMsg);

      // emit signal to front-end to get the message
      io.to(currUser[data.username]["roomID"]).emit("receiveMsg", boardMsg);
    },
    disconnect: function (data, socket) {
      // delete the current user in the currUser
      delete currUser[data.username];

      // disconnect the socket
      socket.disconnect(true);
    },

    // handling query message record from database
    getMsgRecord: async function (roomID) {
      // query the message history from the table chatroom_history
      let result = await knex.raw(
        `
          SELECT linetxt, created_at
          FROM chatroom_history
          WHERE roomID = ?
        `,
        [roomID]
      );
      result = result[0];

      // return back the result
      return result;
    },

    // handling insert message record from database
    recordMsg: async function (roomID, msg) {
      // insert the message in the chatroom_history table
      await knex.raw(
        `
          INSERT INTO chatroom_history(roomID, linetxt)
          VALUE(?, ?)
        `,
        [roomID, msg]
      );
    },
  },

  // handling query list of room from database
  getListofRoom: async function (username) {
    // query the list of room from the table chatroom_pair
    let result = await knex.raw(
      `
        SELECT roomID, username_A, username_B, requestID
        FROM chatroom_pair
        WHERE username_A = ?
        OR username_B = ?
      `,
      [username, username]
    );
    result = result[0];

    // return back the result
    return result;
  },

  // handling query date detail record from database
  getDateDetail: async function (requestID) {
    // query the date detail from the table request
    let result = await knex("request")
      .select("*")
      .where({ requestID: requestID });
    result = result[0];

    // return back the result
    return result;
  },
};
