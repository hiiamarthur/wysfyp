/*
 * COMPONENT NAME: RESTAURANTCONTROLLER
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE RESTAURANT CONTROLLER OF THE EXPRESS.JS.
 *          CONTROLLER IS USED TO CONTROL THE REQUEST SIGNAL AND GIVE THE RESPONSE AFTER
 *          CERTAIN ACTION, IT HELPS TO CONVERT THE REQUEST PARAMS OR BODYS TO THE TYPE WE WANT TO SEE
 *
 *
 */

const services = require("../services/RestaurantServices.js");
const { standardServiceResponse } = require("../utils/ResponseHandler");

module.exports = {
  getAllLocation: function (req, res, next) {
    try {
      console.log("RestaurantController.getAllRestaurant started!");
      // link bewteen router and the service of getting the restaurant details and brings to service reponse function
      return standardServiceResponse(res, next, services.getAllLocation());
    } catch (err) {
      console.log(
        "Error: RestaurantController.getAllRestaurant: " +
          JSON.parse(err.message)["message"]
        // catch exception and shows the error message
      );
      next(err);
    }
  },
  getComment: function (req, res, next) {
    try {
      console.log("RestaurantController.getComment started!");
      // link bewteen router and the service of getting the comment and brings to service reponse function
      const restaurantName = req.params.restaurantName;
      // here is to find out the specific retaurantName from the parameters of the request and get the correct comment.
      return standardServiceResponse(
        res,
        next,
        services.getComment(restaurantName)
      );
    } catch (err) {
      console.log(
        "Error: RestaurantController.getComment: " +
          JSON.parse(err.message)["message"]
      );
      // catch exception and shows the error message
      next(err);
    }
  },
  commentAndRating: function (req, res, next) {
    try {
      console.log("RestaurantController.commentAndRating started!");
      // different from req.param, we use req.body to represent a post parameter.

      const obj = JSON.parse(req.body.obj);
      return standardServiceResponse(res, next, services.commentAndRating(obj));
    } catch (err) {
      console.log(
        "Error: RestaurantController.commentAndRating: " +
          JSON.parse(err.message)["message"]
      );
      // catch exception and shows the error message

      next(err);
    }
  },
};
