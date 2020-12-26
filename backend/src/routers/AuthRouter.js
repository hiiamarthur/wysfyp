/*
 * COMPONENT NAME: AUTHROUTER
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE AUTHENICATATION ROUTER OF THE EXPRESS.JS.
 *          ROUTER IS HELPS TO ASSIGN THE ROUTE FOR DOING CERTAIN ACTIONS.
 *
 */

// importing the express
const express = require("express");
const router = express.Router();

// importing the controller to controll the action for specific route
const authContoller = require("../controllers/AuthController.js");

//  this route is for signing up an account
router.post("/signUp", authContoller.signUp);

//  this route is for logging in our app
router.post("/login", authContoller.login);

// this route is use to check for the user of our app had logged in or not
router.get("/checkLogged", authContoller.checkLogged);

// this route is for logging out
router.get("/logout", authContoller.logout);

// this route is for updating the user profile
router.put("/updateProfile", authContoller.updateProfile);

// this route is for querying the user information
router.get("/queryAccountInform/:inquireInfo/:type", authContoller.queryAccountInform);
module.exports = router;
