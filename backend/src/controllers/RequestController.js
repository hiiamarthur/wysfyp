/*
* COMPONENT NAME: REUQEST_ROUTER
* PROGRAMMER: LAU PING TUNG
* VERSION: 1.0 (11 DEC 2020)
*
* PURPOSE: TO CONTROL THE REQUEST SIGNAL AND GIVE THE RESPONSE AFTER
*          CERTAIN ACTION, IT HELPS TO CONVERT THE REQUEST PARAMS OR BODYS TO THE TYPE WE WANT TO SEE
*/
const { standardServiceResponse } = require("../utils/ResponseHandler");
const requestService = require("../services/RequestServices.js");
const RequestServices = require("../services/RequestServices.js");
const { param } = require("../routers/AuthRouter");

module.exports = {
  queryAllMatchableRequest: function (req, res, next){
    try {
      console.log("RequestController.queryAllMatchbleRequest started!");
      console.log(req.params);
      let params = {
        fieldName:req.params.fieldName.split('=')[1],
        fieldValue:req.params.fieldValue.split('=')[1],
        orderFieldName:req.params.orderFieldName.split('=')[1],
        userID:req.params.userID.split('=')[1]
      }
      // let params = {
      //   fieldName:"sport",
      //   fieldValue:"football",
      //   orderFieldName:"cTime",
      //   userID:5
      // }
      return standardServiceResponse(
        res,
        next,
        RequestServices.queryAllMatchableRequest(params)
      )
    }catch (err) {
        console.log(
          "Error: RequestController.queryAllMatchableRequest: " +
            JSON.parse(err.message)["message"]
        );
        next(err);
      }
  },
  insertRequest: function (req, res, next){
    try {
        // let requestInfo = req.body;
        let requestInfo = {
          ageGroup:req.body.ageGroup,
          description:req.body.description,
          destination:req.body.destination,
          requiredNum:req.body.requiredNum,
          sport: req.body.sport,
          title: req.body.title,
          userID: req.body.userID,
          timeInterval: req.body.timeInterval
        }
        console.log("RequestController.insertRequest started!");
        return standardServiceResponse(res, next, requestService.insertRequest(requestInfo));
      } catch (err) {
        console.log(
          "Error: RequestController.insertRequest: " +
            JSON.parse(err.message)["message"]
        );
        next(err);
      }
  },
  deleteRequest: function (req, res, next){
    try{
      let id = req.body;
      console.log("RequestController.deleteRequest started!");
      return standardServiceResponse(res, next, requestService.deleteRequest(id));
    }catch (err) {
        console.log(
          "Error: RequestController.deleteRequest: " +
            JSON.parse(err.message)["message"]
        );
        next(err);
      }
  }
  // queryLocationList: function (req, res, next) {
  //   try {
  //     console.log("RequestController.queryLocationList started!");
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.queryLocationList()
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.queryLocationList: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // queryRequest: function (req, res, next) {
  //   try {
  //     console.log("RequestController.queryRequestt started!");
  //     return standardServiceResponse(res, next, requestService.queryRequest());
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.queryRequest: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // queryInvitation: function (req, res, next) {
  //   try {
  //     console.log("RequestController.queryInivation started!");
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.queryInvitation()
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.queryInivation: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // queryInsertRequestInfo: function (req, res, next) {
  //   try {
  //     console.log("RequestController.queryInsertRequestInfo started!");
  //     obj = {
  //       name: req.body.name,
  //       location: req.body.location,
  //       date: req.body.date,
  //       start: req.body.start,
  //       end: req.body.end,
  //       user: req.body.user,
  //       state: req.body.state,
  //     };
  //     console.log(obj);
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.queryInsertRequestInfo(obj)
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.queryInsertRequestInfo: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // getListOfRequest: function (req, res, next) {
  //   try {
  //     console.log("RequestController.getListOfRequest started!");
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.getListOfRequest()
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.getListOfRequest: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // insertInvitation: function (req, res, next) {
  //   try {
  //     console.log("RequestController.insertInvitation started!");
  //     obj = {
  //       requestID: req.body.requestID,
  //       inviteUser: req.body.inviteUser,
  //     };
  //     console.log(obj);
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.insertInvitation(obj)
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.insertInvitation: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // getMyRequest: function (req, res, next) {
  //   try {
  //     console.log("RequestController.getMyRequest started!");
  //     const username = req.params.username;
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.getMyRequest(username)
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.getMyRequest: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // getInvitation: function (req, res, next) {
  //   try {
  //     console.log("RequestController.getInvitation started!");
  //     const requestID = req.params.requestID;
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.getInvitation(requestID)
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.getInvitation: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
  // acceptInvitation: function (req, res, next) {
  //   try {
  //     console.log("RequestController.acceptInvitation started!");
  //     const obj = JSON.parse(req.body.info);
  //     return standardServiceResponse(
  //       res,
  //       next,
  //       requestService.acceptInvitation(obj)
  //     );
  //   } catch (err) {
  //     console.log(
  //       "Error: RequestController.acceptInvitation: " +
  //         JSON.parse(err.message)["message"]
  //     );
  //     next(err);
  //   }
  // },
};
