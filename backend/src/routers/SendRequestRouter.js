/*
* COMPONENT NAME: SENDREQUESTROUNTER
* PROGRAMMER: LAU PING TUNG
* VERSION: 1.0 (11 DEC 2020)
*
* PURPOSE: ROUTER IS HELPS TO ASSIGN THE ROUTE FOR DOING CERTAIN ACTIONS.
*/
// importing the express
const express = require("express");
const router = express.Router();

// importing the controller to controll the action for specific route

const sendRequestController = require("../controllers/SendRequestController.js");

//  this route is for getting all existing request
router.get("/getRequest", sendRequestController.queryRequest);
//  this route is for getting all invitation
router.get("/getInvitation", sendRequestController.queryInvitation);
//  this route is for making a new request
router.post("/insertRequestInfo", sendRequestController.queryInsertRequestInfo);

module.exports = router;
