/*
 * COMPONENT NAME: SEND_REQUEST_SERVICE
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: BACKEND SERVICE FOR DOING THE SERVICE EXACTLY IN HERE.
 */

const knex = require("knex")(require("../../knexfile.js")["development"]);
const { request } = require("express");
const moment = require("moment-timezone");
const admin = require('../firebaseAdmin');
let requests = admin.firestore.collection('requests');
let valueCount = admin.firestore.collection('valueCount');
const FieldValue = admin.admin.firestore.FieldValue;
module.exports = {
  queryAllMatchableRequest: async function(params){
    let expression;
    console.log(params);
    let data = []
    let success = true;
    // requests.where("requestID","==",1).where("userID","==",5).orderBy("age").get().then(querySnapshot=>{
    //   querySnapshot.forEach(doc=>{
    //     console.log(doc.id,doc.data())
    //   })
    // })
    if(params.fieldName === "" || params.fieldValue === ""){
      expression = requests;
    }else if(params.userID === ""){
      expression = requests.where(params.fieldName ,"==",params.fieldValue).where("userID","==",params.userID);
    }else{
      expression = requests.where(params.fieldName ,"==",params.fieldValue);
    }
    const snapshot = await expression
    // .orderBy(params.fieldName)
    .get().catch(err=>{
      success = false;
    });

    snapshot.forEach(doc=>{
      data.push(doc.data());
    });
    return await new Promise((resolve, reject) => {
      if(success) {
         const successObject = {
            success: true,
            data: data,
         }
         console.log(successObject);
         resolve(successObject); 
      } else {
         const errorObject = {
            success: false,
            message: "password incorrect", //...some error we got back
         }
         reject(errorObject);
      }
   });
    
    //     querySnapshot.forEach(doc=>{
    //       console.log(doc.id,doc.data());
    //     }
    //     )
    // });
    // return requests.doc().get().then(querySnapShot=>{
    //   querySnapShot.foreach(function(doc){
    //     doc.
      // }
        
      // )
    // })
  },
  insertRequest: async function(requestInfo){
    await valueCount.doc('requests').get().then(doc=>{
      if(doc.exists){
        let oldCount = doc.data().count;
        let autoIncrement = doc.data().autoIncrement;
        requests.doc("request".concat((autoIncrement+1).toString())).set({
          ageGroup: requestInfo.ageGroup,
          description: requestInfo.description,
          destination: requestInfo.destination,
          ctime: Date.now(),
          currentNum: 1,
          haveChat: false,
          haveMatched: false,
          requestID: autoIncrement+1,
          requiredNum: requestInfo.requiredNum,
          sport: requestInfo.sport,
          title: requestInfo.title,
          userID: requestInfo.userID,
          timeInterval: requestInfo.timeInterval
        }).then(()=>{
          valueCount.doc('requests').update({
            count: oldCount+1,
            autoIncrement:autoIncrement+1
          }).then(()=>{
            console.log("Value Count Update Successfully!");
          }).catch(err=>{
            console.log(err);
          })
        }).catch(err=>{
          console.log(err);
        })
      }
    }).catch(err=>{
      console.log(err)
    })
  },
  deleteRequest: async function(id){
       console.log("xd");
      await requests.where("requestID","==",id).get().then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
          console.log(doc.id);
          let rid = doc.id;
          requests.doc(rid).update({
            ageGroup: FieldValue.delete(),
            description: FieldValue.delete(),
            destination: FieldValue.delete(),
            currentNum: FieldValue.delete(),
            haveChat: FieldValue.delete(),
            haveMatched: FieldValue.delete(),
            requestID: FieldValue.delete(),
            requiredNum: FieldValue.delete(),
            sport: FieldValue.delete(),
            title: FieldValue.delete(),
            userID: FieldValue.delete()
          }).then(function(){
            console.log("All fields are deleted!");
          }).catch(err=>{
            console.log(err);
          })
        })
      }).catch(err=>{
        console.log(err);
      })
      return await requests.doc('request'.concat(id)).delete().then(function(){
        valueCount.doc('requests').get().then(doc=>{
          let oldCount = doc.data().count;
          valueCount.doc('requests').update({
            count: oldCount-1
          })
        })
        
      })
  }
  // queryLocationList: async function () {
  //   let result = await knex.raw(`
  //       SELECT restaurantName FROM restaurant_details
  //   `);
  //   console.log(result[0]);
  //   result[0] = JSON.stringify(result[0]);
  //   return result[0];
  // },
  // queryRequest: async function (user) {
  //   let result = await knex.raw(`
  //       SELECT requestId,requestName,location,date,startingTime,endingTime FROM request
  //   `);
  //   console.log(result[0]);
  //   return result[0];
  // },
  // queryInvitation: async function (user) {
  //   let result = await knex.raw(`
  //       SELECT invitationId,requestId,inviteUsername FROM invitation
  //   `);
  //   console.log(result[0]);
  //   return result[0];
  // },
  // queryInsertRequestInfo: async function (obj) {
  //   await knex.raw(
  //     `
  //     INSERT INTO request(requestName,location,date,startingTime,endingTime,createUser,stateVegetarian)
  //     VALUE(?,?,?,?,?,?,?)
  //   `,
  //     [
  //       obj.name,
  //       obj.location,
  //       obj.date,
  //       obj.start,
  //       obj.end,
  //       obj.user,
  //       obj.state,
  //     ]
  //   );
  //   return;
  // },
  // getListOfRequest: async function () {
  //   // fetch request data from database (request)
  //   //browse request: showing requests
  //   const currDate = moment().format("YYYY-MM-DD");
  //   const currTime = moment().format("HH:mm:ss");
  //   let result = await knex.raw(
  //     `
  //         SELECT requestID, createUser, requestName, location, date, startingTime, endingTime, major, year, selfIntro, stateVegetarian 
  //         FROM request 
  //         LEFT JOIN account ON createUser = account.username
  //         WHERE (date > ? OR ( date = ? AND startingTime >= ?)  )
  //         AND stateFinish = 0
  //         ORDER BY date ASC
  //     `,
  //     [currDate, currDate, currTime]
  //   );
  //   return result[0];
  // },
  // insertInvitation: async function (obj) {
  //   await knex.raw(
  //     `
  //     INSERT INTO invitation(requestID,inviteUsername)
  //     VALUE(?, ?)
  //   `,
  //     [obj.requestID, obj.inviteUser]
  //   );
  //   return;
  // },
  // getMyRequest: async function (username) {
  //   return await knex("request")
  //     .select("*")
  //     .where({ createUser: username, stateFinish: 0 });
  // },
  // getInvitation: async function (requestID) {
  //   return await knex("invitation")
  //     .select(
  //       "requestID",
  //       "username",
  //       "displayName",
  //       "year",
  //       "major",
  //       "college",
  //       "selfIntro"
  //     )
  //     .join("account", "account.username", "=", "invitation.inviteUsername")
  //     .where({ requestID: requestID })
  //     .groupBy("account.username");
  // },
  // acceptInvitation: async function (obj) {
  //   await knex("chatroom_pair").insert({
  //     username_A: obj.username_A,
  //     username_B: obj.username_B,
  //     requestID: obj.requestID,
  //   });
  //   await knex("request")
  //     .update({ stateFinish: 1 })
  //     .where({ requestID: obj.requestID });
  //   return;
  // },
};
