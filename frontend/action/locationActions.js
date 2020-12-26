import * as t from '../plugin/redux/actionTypes';

import {store} from '../plugin/redux/store';
import{service} from '../plugin/service';

import { Alert } from 'react-native'; // to show alerts in app

export const locationActions = {
    queryLocation,
    insertComment,
    queryComment,
}
function setqueryLocation(queryData){
    return {
        type: t.GETLOCATION_REQUEST,
        payload: queryData
    }
}
function queryLocation(){
    console.log("action queryLocation started!");
    return dispatch =>{
        return service.get('/location/getAllLocation').then((res) => {
            if(res.data){
                dispatch(setqueryLocation(res.data.data));
            }
        }).catch(err=>{
            console.log(err);
        });
    }
    
}

function insertComment(){}

function queryComment(){}