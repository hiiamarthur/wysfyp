/*
 * COMPONENT NAME: AUTHCONTROLLER
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE AUTHENICATATION CONTROLLER OF THE EXPRESS.JS.
 *          CONTROLLER IS USED TO CONTROL THE REQUEST SIGNAL AND GIVE THE RESPONSE AFTER
 *          CERTAIN ACTION, IT HELPS TO CONVERT THE REQUEST PARAMS OR BODYS TO THE TYPE WE WANT TO SEE
 *
 *
 */

// import the module for handling the request in a certain format
const { standardServiceResponse } = require("../utils/ResponseHandler");

// import the service, where to do the query or editing to the database
const authServices = require("../services/AuthServices.js");

// import a node module for handling the login request
const passport = require("passport");
//const {auth} = require('../firebase');
const admin = require('../firebaseAdmin');



// as we use jwt token for our login, we import jwt module
const jwt = require("jsonwebtoken");
const secret_key = "secret";

// this controller is used to control the request signal and give the response after certain action
// it helps to convert the request params or bodys to the type we want to use

module.exports = {
  //  this is for sign up request
  signUp: function (req, res, next) {
    try {
      console.log("AuthController.signUp started!");
      const newUser = req.body;
      console.log(newUser);
      
      return standardServiceResponse(res, next, authServices.signUp(newUser));
    } catch (err) {
      console.log(
        "Error: AuthController.signUp: " + JSON.parse(err.message)["message"]
      );
      next(err);
    }
  },

  //  this is for log in request
  login: async function (req, res, next) {
    try {
      console.log("AuthController.login started!");
      const loginInfo = req.body;
      console.log(loginInfo);
      // auth.signInWithEmailAndPassword(email, password).catch(error => {
      //   setError("Error signing in with password and email!");
      //   console.error("Error signing in with password and email", error);
      // });
      // authServices.login(loginInfo).then(function(data){
      //   console.log(data);
      //   if(data.id){
      //     let uid = data.id;
      //     admin.auth.createCustomToken(uid)
      //     .then(function(customToken) {
      //       console.log("success!!!");
      //       console.log(customToken);
      //       // Send token back to client
      //       // res.send(customToken);
            
      //     })
      //     .catch(function(error) {
      //       console.log('Error creating custom token:', error);
      //     });
      //     }
      // }).catch(err=>{
      //   console.log(err);
      // })
      return standardServiceResponse(res, next, authServices.login(loginInfo));
    } catch (err) {
      // if error occur console.log the error
      console.log(
        "Error: AuthController.login: " + JSON.parse(err.message)["message"]
      );

      // assign error to next function
      next(err);
    }
  },

  //  this is for check logged in or not request
  checkLogged: function (req, res, next) {
    try {
      console.log("AuthController.checkLogged started!");

      // check the request header have jwt token or not
      if (req.headers.hasOwnProperty("authorization")) {
        // if have token, verify the jwt token
        let user = {
          userInfo: jwt.verify(
            req.headers.authorization.split(" ")[1],
            secret_key
          )["sub"],
          token: req.headers.authorization.split(" ")[1],
        };
        return res.json({
          statusCode: 200,
          data: user,
          success: true,
        });
      } else {
        // if no token, return Unauthorized action
        return res.json({
          error: "Unauthorized action",
          statusCode: 403,
          success: false,
        });
      }
    } catch (err) {
      next(err);
    }
  },

  //  this is for log out request
  logout: function (req, res, next) {
    try {
      console.log("AuthController.logout started!");

      // send request log out signal
      req.logOut();

      // return a success signal to let front end know logout successfully
      return res.json({ data: { success: true, user: req.user } });
    } catch (err) {
      // if error occur console.log the error
      console.log(
        "Error: AuthController.logout: " + JSON.parse(err.message)["message"]
      );

      // assign error to next function
      next(err);
    }
  },

  // this is for query the account information request
  queryAccountInform: function (req, res, next) {
    try {
      console.log("AuthController.queryAccountInform started!");
      const inquireInfo = req.params.inquireInfo;
      const type = req.params.type;
      console.log(type);
      const[dum1,fieldname] = type.split('=');
      const[dum2,info]  = inquireInfo.split('=')
      let data = {
        fieldname:fieldname,
        info:info
      }
      authServices.queryAccountInform(data).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
      //fetch data from account database using username as key
      return standardServiceResponse(
        res,
        next,
        authServices.queryAccountInform(data)
      );
    } catch (err) {
      //if error occur console.log the error
      console.log(
        "Error: AuthController.queryAccountInform: " +
          JSON.parse(err.message)["message"]
      );
      next(err);
    }
  },
  updateProfile: function (req, res, next) {
    // defining the object that will be passed to authServices.updateProfile()
    try {
      console.log("AuthController.updateProfile started!");

      //objects needed to be fetched from datavase
      obj = {
        username: req.body.username,
        password: req.body.password,
        displayName: req.body.displayName,
        email: req.body.email,
        year: req.body.year,
        major: req.body.major,
        email: req.body.email,
        college: req.body.college,
        selfIntro: req.body.selfIntro,
        oldpw: req.body.oldpw,
      };
      //fetch data from database
      return standardServiceResponse(
        res,
        next,
        authServices.updateProfile(obj)
      );
    } catch (err) {
      //if error occur console.log the error
      console.log(
        "Error: AuthController.updateProfile: " +
          JSON.parse(err.message)["message"]
      );
      next(err);
    }
  },
};
