/*
* COMPONENT NAME: REUQEST_ROUTER
* PROGRAMMER: LAU PING TUNG
* VERSION: 1.0 (11 DEC 2020)
*
* PURPOSE: TO ASSIGN THE ROUTE FOR DOING CERTAIN ACTIONS.
*/
const express = require("express");
const RequestController = require("../controllers/RequestController.js");
const router = express.Router();
const requestController = require("../controllers/RequestController.js");
const { insertRequest } = require("../services/RequestServices.js");

// router.get("/getLocationList", requestController.queryLocationList);
// router.get("/getRequest", requestController.queryRequest);
// router.get("/getInvitation", requestController.queryInvitation);
// router.post("/insertRequestInfo", requestController.queryInsertRequestInfo);

// router.get("/requestlist", requestController.getListOfRequest);
// router.post("/sendInvitation", requestController.insertInvitation);
router.get("/getMatchableRequest/:fieldName/:fieldValue/:orderFieldName/:userID",RequestController.queryAllMatchableRequest);
router.post("/insertRequest",RequestController.insertRequest);
router.post("/deleteRequest",RequestController.deleteRequest);
// my request
// router.get("/getRequest/:username", requestController.getMyRequest);
// router.get("/getInvitation/:requestID", requestController.getInvitation);
// router.post("/acceptInvitation", requestController.acceptInvitation);
module.exports = router;
