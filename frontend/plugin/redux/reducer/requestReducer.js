import { requestState } from '../initialState';
import * as t from '../actionTypes';
// import {actionTypes} from './action'
export const requestReducer = (state = requestState, action) => {
  
  switch (action.type) {
    case t.GETREQUEST_REQUEST:
      console.log("reducer get request started");
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        data: action.payload.data
      };
    //   case t.LOGOUT:
    //     console.log("reducer logout request started");
    //   return {
    //     ...state,
    //     ...action.payload, // this is what we expect to get back from API call and login page input
    //     isLoggedIn: false, // we set this as true on login
    //     userId: '',
    //     username: ''
    //   };
    default:
      return state;
  }
};

// import { initialState } from './initialState';
// import * as t from './actionTypes';

// export const loginReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case t.SET_LOGIN_STATE:
//       return {
//         ...state,
//         ...action.payload, // this is what we expect to get back from API call and login page input
//         isLoggedIn: true, // we set this as true on login
//       };
//     default:
//       return state;
//   }
// };