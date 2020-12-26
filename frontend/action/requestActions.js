import * as t from '../plugin/redux/actionTypes';

import {store} from '../plugin/redux/store';
import{service} from '../plugin/service';

import { Alert } from 'react-native'; // to show alerts in app

export const requestActions = {
    query,
    insert,
    delete: _delete,
    update
}
function setGetRequestState(requestData){
    return {
      type: t.GETREQUEST_REQUEST,
      payload: requestData,
    };
  };
function query(fieldname,fieldtype,orderFieldName,IsAll){
    console.log("action query request started");
    let userID = store.getState().authenticateReducer.userId;
    let route;
    console.log(userID);
    
    if(!IsAll)
        route = `/matching/getMatchableRequest/fieldName=${fieldname}/fieldValue=${fieldtype}/orderFieldName=${orderFieldName}/userID=${userID}`;
    else
        route = `/matching/getMatchableRequest/fieldName=${fieldname}/fieldValue=${fieldtype}/orderFieldName=${orderFieldName}/userID=`;
    console.log(route);
    return dispatch=>{
        return service.get(route)
            .then(res=>{
                console.log(res.data.data);
                console.log("yoyoyoyo")
                dispatch(setGetRequestState({data:res.data.data}))
                return res.data.data;
                // dispatch()
            }).catch(err=>{
                console.log(err);
            })
    }
}

function insert(requestInfo){
    console.log("action insert request started");
    requestInfo.userID = store.getState().authenticateReducer.userId;
    return service.post('/matching/insertRequest',requestInfo)
        .then(res=>{
            console.log(res);
            query("","","",true);
        }).catch(err=>{
            console.log(err);
        })
}

function _delete(){}

function update(){}