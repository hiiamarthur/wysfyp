import { locationState } from '../initialState';
import * as t from '../actionTypes';
// import {actionTypes} from './action'
export const locationReducer = (state = locationState, action) => {
  
  switch (action.type) {
    case t.GETLOCATION_REQUEST:
      console.log("reducer get location started");
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        data: action.payload.data
      };
    default:
      return state;
  }
};
