/*
 * COMPONENT NAME: CHATROOMCONTROLLER
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE AUTHENICATATION CONTROLLER OF THE EXPRESS.JS.
 *          CONTROLLER IS USED TO CONTROL THE REQUEST SIGNAL AND GIVE THE RESPONSE AFTER
 *          CERTAIN ACTION, IT HELPS TO CONVERT THE REQUEST PARAMS OR BODYS TO THE TYPE WE WANT TO SEE
 *
 */

// import the module for handling the request in a certain format
const { standardServiceResponse } = require("../utils/ResponseHandler");

// import the service, where to do the query or editing to the database
const chatroomServices = require("../services/ChatroomServices.js");

// this controller is used to control the request signal and give the response after certain action
// it helps to convert the request params or bodys to the type we want to use

module.exports = {
  // handling socket requests
  socket: function (socket, io) {
    console.log("Connect Socket!");

    // handling join room request for socket
    socket.on("joinRoom", (user, roomID) => {
      console.log("Handling joinRoom signal!");

      // set data to pass it to the service
      let data = {
        username: user.username,
        roomID: roomID,
      };

      // pass to service
      chatroomServices.socket.joinRoom(data, socket, io);
    });

    // handling send message request for socket
    socket.on("sendMsg", (user, msg) => {
      console.log("Handling sendMsg signal!");

      // set data to pass it to the service
      let data = {
        username: user.username,
      };

      // pass to service
      chatroomServices.socket.sendMsg(data, msg, io);
    });

    // handling leave chatroom page request for socket
    socket.on("leavePage", (user) => {
      console.log("Handling disconnect signal!");

      // set data to pass it to the service
      let data = {
        username: user.username,
      };

      // pass to service
      chatroomServices.socket.disconnect(data, socket);
    });
  },

  // handling request for querying list of room
  getListofRoom: function (req, res, next) {
    try {
      console.log("ChatroomController.getListofRoom started!");

      // get the request params
      let username = req.params.username;

      // pass to service
      return standardServiceResponse(
        res,
        next,
        chatroomServices.getListofRoom(username)
      );
    } catch (err) {
      // if error occur console.log the error
      console.log(
        "Error: ChatroomController.getListofRoom: " +
          JSON.parse(err.message)["message"]
      );

      // assign error to next function
      next(err);
    }
  },

  // handling request for querying date detail
  getDateDetail: function (req, res, next) {
    try {
      console.log("ChatroomController.getDateDetail started!");

      // get the request params
      let requestID = req.params.requestID;

      // pass to service
      return standardServiceResponse(
        res,
        next,
        chatroomServices.getDateDetail(requestID)
      );
    } catch (err) {
      // if error occur console.log the error
      console.log(
        "Error: ChatroomController.getDateDetail: " +
          JSON.parse(err.message)["message"]
      );

      // assign error to next function
      next(err);
    }
  },
};
