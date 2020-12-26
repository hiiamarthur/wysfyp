import { initialState } from '../initialState';
import * as t from '../actionTypes';
// import {actionTypes} from './action'
export const authenticateReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case t.LOGIN_REQUEST:
      console.log("reducer login request started");
      console.log(action);
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
        userId: action.payload.userId,
        username: action.payload.username,
        haveSetProfile: action.payload.haveSetProfile
      };
      case t.LOGOUT:
        console.log("reducer logout request started");
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: false, // we set this as true on login
        userId: '',
        username: ''
      };
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