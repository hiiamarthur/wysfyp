import * as t from '../plugin/redux/actionTypes';

import{service} from '../plugin/service';

import { Alert } from 'react-native'; // to show alerts in app
import {store} from '../plugin/redux/store';
import axios from "axios";
import {userConstants} from "../plugin/_constants/user.constants";
import {auth}from "../plugin/firebase";
import {network} from '../plugin/global';
import Constants from "expo-constants";
// const { manifest } = Constants;

// const url = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
//   ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
//   : `api.example.com`;

// Get Local IP
var ipx,ipy;

// this is what our action should look like which dispatches the "payload" to reducer

export const authenticateActions = {
  login,
  logout,
  register,
  getAccountInfo,
  delete: _delete
};
  
function setLoginState(loginData){
  return {
    type: t.LOGIN_REQUEST,
    payload: loginData,
  };
};
  function login(username, password, navigation,name) {
    console.log("login action started");
    const loginInput = {"username":username,"password":password};
    return async dispatch => {
      let service_state = false;
      let service_result = {status: "failed"};
        // dispatch(request({ username }));

        // userService.login(username, password)
        //     .then(
        //         user => { 
        //             dispatch(success(user));
        //             history.push(from);
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //             dispatch(alertActions.error(error.toString()));
        //         }
        //     );
        await service.post('/auth/login',loginInput)
            .then((res) => {
              console.log('xd');
              console.log(res.data);
              if(res.data.data.status){
                dispatch(setLoginState({username:res.data.data.username,userId:res.data.data.userId,haveSetProfile:res.data.data.haveSetProfile}));
                // dispatch(success(user));
                // if(!res.data.data.haveSetProfile){
                //   navigation.navigate('profileForm');
                // }else{
                  navigation.replace(name);
                // }
                service_state = true;
                service_result = {status: "success"};
              }
              else {
                // dispatch(failure(error.toString()));
                Alert.alert('Login Failed', 'Username or Password is incorrect');
          }
        })
        .catch((err) => {
          Alert.alert('Login Failed', 'Some error occured, please retry');
          console.log(err);
        });
      
      return await new Promise((resolve, reject) => {
        console.log(service_result,service_state);
        const Object = service_result;
      if(service_state == true) {
          
          resolve(Object); 
      } else {

          reject(Object);
      }
    })
    };
    
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
  console.log("logout action started!")
  return dispatch => {dispatch(setLogoutState())};
  

  function setLogoutState(){return {type:t.LOGOUT,payload: null}};
}

function register(username,password,email) {
  console.log("register action started!")
  let registerInfo = {
    username:username,
    password:password,
    email:email
  }
  return dispatch => {
      dispatch(request(username));

      return service.post('/auth/signUp',registerInfo)
            .then((res) => {
              console.log(res);
              if(res.data){
                Alert.alert("registration successful!","You can press back to Login now!");
                // dispatch(success);
                // dispatch(success(user));
              }
              else {
                // dispatch(failure(error.toString()));
                Alert.alert('Register Failed', 'Username or Password is incorrect');
          }
        })
        .catch((err) => {
          Alert.alert('Register Failed', 'Some error occured, please check Username or Password');
          console.log(err);
        });
  };

  function request(username) { return { type: userConstants.REGISTER_REQUEST, username } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAccountInfo(inquireInfo,type) {
  console.log("get AccountInfo action started!");
  console.log(inquireInfo,type);
  console.log(`/auth/queryAccountInform/inquireInfo=${inquireInfo}`);
  // let registerInfo = {
  //   username:username,
  //   password:password,
  //   email:email
  // }
  // return dispatch => {
  //     dispatch(request(username));
      return service.get(`/auth/queryAccountInform/inquireInfo=${inquireInfo}/type=${type}`)
            .then((res) => {
              // console.log(res.data.data._size);
              if(res.data.data._size){
                // console.log("registration successful!");
                // dispatch(success);
                // dispatch(success(user));
                Alert.alert('Register Error', 'Username duplicated');
                return {status:false,message:""}
              }
              else {
                return {status:true,message:""}
                // dispatch(failure(error.toString()));
                // Alert.alert('Register Failed', 'Username or Password is incorrect');
          }
        })
        .catch((err) => {
          // Alert.alert('Register Failed', 'Some error occured, please retry');
          console.log(err);
        });
  // };

  function request(username) { return { type: userConstants.REGISTER_REQUEST, username } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
  return dispatch => {
      dispatch(request());

      userService.getAll()
          .then(
              users => dispatch(success(users)),
              error => dispatch(failure(error.toString()))
          );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
      dispatch(request(id));

      userService.delete(id)
          .then(
              user => dispatch(success(id)),
              error => dispatch(failure(id, error.toString()))
          );
  };

  function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}


// export const login = (loginInput,dispatch) => {
//   const { username, password } = loginInput;
//   //this.getIPAddress();
//   // console.log(ipx);
//   // console.log(ipy);
  
//   // network.getIpAddressAsync().then((v)=>{console.log(v)})
//   // network.getMacAddressAsync().then((v)=>{console.log(v)})
//   // console.log(Constants.experienceUrl);
//   // console.log(url);
//   // console.log('xd1');
//   // console.log(loginInput);
//   return service.post('/auth/login',loginInput)
//     .then((res) => {
//       console.log(res.data)
//       dispatch(setLoginState());
//   }).catch((error) => {
//       console.log(error)
//   });

//   // return (dispatch) => {  // don't forget to use dispatch here!
//   //   service.post('/auth/login', loginInput)
//   //   .then(function (response) {
//   //     console.log(response);

//   //     // and create action obj here
//   //     dispatch(setLoginState());
//   // })
//   // .catch(function (error) {
//   //     throw error;
//   //     console.log(error);
//   // });
// //     // return await service
// //     // .post('/auth/login',{
// //     //   username:loginInput.username,
// //     //   password:loginInput.password
// //     // }).then(res => {
// //     //   // if the credential are correct
// //     //   if (res.data.success) {
// //     //     // assign the variables to state by the function 'login' in mutation
// //     //     // context.commit("login", {
// //     //     //   token: res.data.data.token,
// //     //     //   user: res.data.data.userInfo[0],
// //     //     //   exp: Math.floor(Date.now() / 1000) + 60 * 360
// //     //     // });
// //     //     // // return the user information to have a signal
// //     //     // return res.data.data.user;
// //     //   } else {
// //     //     // // activate the function 'logout' in mutation
// //     //     // context.commit("logout");
// //     //     // // throw error
// //     //     // throw "Wrong username or password";
// //     //   }
// //     // }).catch(err=>{
// //     //   throw err;
// //     // })
// //     // 
    
// //   };
// };

// // export const login = (loginInput) => {
// //     console.log('xd');
// //   console.log(loginInput);
// //   //const { username, password } = loginInput;
// //   return (dispatch) => {  // don't forget to use dispatch here!
// //     return axios.post("http://localhost:3000/auth/login",loginInput)
// //     .then(res => {
// //       if (res.status == 201){
// //        navigation.navigate('Home')
// //        storeData(res.data)
// //       }else {
// //         Alert.alert('Wrong email or password')
// //       }
// //     })
// //     .catch(function(error) {
// //       console.log(error.message);
// //         throw error;
// //       })
// //   };
// // };