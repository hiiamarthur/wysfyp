/*
 * COMPONENT NAME: CHATROOMROUTER
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE CHATROOM ROUTER OF THE EXPRESS.JS.
 *          ROUTER IS HELPS TO ASSIGN THE ROUTE FOR DOING CERTAIN ACTIONS.
 *
 */

// importing the express
const express = require("express");
const router = express.Router();

// importing the controller to controll the action for specific route
const chatroomController = require("../controllers/ChatroomController.js");

module.exports = function (io) {
  //  this is for connecting to the socket.io service
  io.on("connection", (socket) => {
    chatroomController.socket(socket, io);
  });

  //  this route is for getting the list of room
  router.get("/getListofRoom/:username", chatroomController.getListofRoom);

  //  this route is for getting the date detail of the specific data
  router.get("/getDateDetail/:requestID", chatroomController.getDateDetail);
  return router;
};
