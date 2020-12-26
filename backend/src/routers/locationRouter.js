/*
 * COMPONENT NAME: RESTAURANTROUTER
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE AUTHENICATATION ROUTER OF THE EXPRESS.JS.
 *          ROUTER IS HELPS TO ASSIGN THE ROUTE FOR DOING CERTAIN ACTIONS.
 *
 */

const express = require("express");
const router = express.Router();
const controllers = require("../controllers/RestaurantController.js");

// this is the route for getting the restaurant information
router.get("/getAllLocation", controllers.getAllLocation);

// this is the route for geting the comment and rating with respect to each restaurant
router.get("/getComment/:restaurantName", controllers.getComment);

// this is the route for posting new comment and rating
router.post("/commentAndRating", controllers.commentAndRating);

module.exports = router;
