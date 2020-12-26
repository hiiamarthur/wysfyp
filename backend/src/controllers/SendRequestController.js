/*
* COMPONENT NAME: SENDREQUESTCONTROLLER
* PROGRAMMER: LAU PING TUNG
* VERSION: 1.0 (11 DEC 2020)
*
* PURPOSE: CONTROLLER IS USED TO CONTROL THE REQUEST SIGNAL AND GIVE THE RESPONSE AFTER
*          CERTAIN ACTION, IT HELPS TO CONVERT THE REQUEST PARAMS OR BODYS TO THE TYPE WE WANT TO SEE
*/
// import the module for handling the request in a certain format
const { standardServiceResponse } = require("../utils/ResponseHandler");
// import the service, where to do the query or editing to the database
const testServices = require("../services/SendRequestServices.js");

// this controller is used to control the request signal and give the response after certain action
// it helps to convert the request params or bodys to the type we want to use


module.exports = {

  //  this is for getting all existing request
  queryRequest: function(req, res, next) {
    try {
      console.log("SendRequestController.queryRequestt started!");
      return standardServiceResponse(res, next, testServices.queryRequest());
    } catch (err) {
      console.log(
        "Error: SendRequestController.queryRequest: " +
          JSON.parse(err.message)["message"]
      );
      next(err);
    }
  },
  //  this is for getting all existing invitation
  queryInvitation: function(req, res, next) {
    try {
      console.log("SendRequestController.queryInivation started!");
      return standardServiceResponse(res, next, testServices.queryInvitation());
    } catch (err) {
      console.log(
        "Error: SendRequestController.queryInivation: " +
          JSON.parse(err.message)["message"]
      );
      next(err);
    }
  },
  // this is for makeing a new request
  queryInsertRequestInfo: function(req, res, next) {
    try {
      console.log("SendRequestController.queryInsertRequestInfo started!");
      obj = {
        name: req.body.name,
        location: req.body.location,
        date: req.body.date,
        start: req.body.start,
        end: req.body.end,
        user:req.body.user,
        state: req.body.state
      };
      console.log(obj);
      return standardServiceResponse(
        res,
        next,
        testServices.queryInsertRequestInfo(obj)
      );
    } catch (err) {
      console.log(
        "Error: SendRequestController.queryInsertRequestInfo: " +
          JSON.parse(err.message)["message"]
      );
      next(err);
    }
  }
};
