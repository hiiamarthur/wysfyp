/*
 * COMPONENT NAME: AUTHSERVICES
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE AUTHENICATATION SERVICES OF THE EXPRESS.JS.
 *          SERVICES MEANS THAT DOING THE SERVICE EXACTLY IN HERE.
 *
 */

const knex = require("knex")(require("../../knexfile.js")["development"]);
const bcrypt = require("bcrypt");
const admin = require('../firebaseAdmin');
let account = admin.firestore.collection('accounts');
let valueCount = admin.firestore.collection('valueCount');

module.exports = {
  // insert new user information into database (account)
  signUp: async function (newUser) {
    let result = {
      data: {},
      status: "fail"
    }
    await account.where('username','==', newUser.username).get().then(async querySnapshot => {
      if(querySnapshot.size > 0){
        result.data = {success:false,resultMsg:"Username have been used!"};
        result.status = "success";
      }else{
        await valueCount.doc('accounts').get().then(async doc=>{
          if(doc.exists){
            let oldCount = doc.data().count;
            let autoIncrement = doc.data().autoIncrement;
            await account.doc(newUser.username).set({
              email:newUser.email,
              username:newUser.username,
              password:newUser.password,
              userId:autoIncrement+1,
              haveSetProfile:false
            })
            .then(async function() {
                await valueCount.doc('accounts').update({
                  count: oldCount+1,
                  autoIncrement: autoIncrement+1
                }).then(()=>{
                  console.log("valueCount successfully updated"); 
                  result.data = {success:true,resultMsg:"Registration Successful"},
                    result.status =  "success"
                }).catch(err=>{
                  console.error(err);
                  result.message = err;
                })
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                result.message = console.error("Error writing document: ", error);
            });
          }
        }).catch(err=>{
          console.error(err);
        })
        
        
      }
    })

    return await new Promise((resolve, reject) => {
      console.log(result)
        const Object = result;
      if(result.status == "success") {
         
         resolve(Object); 
      } else {

         reject(Object);
      }
   });
    // insert the account information in backend
    // return await knex("account").insert({
    //   username: newUser.username,
    //   password: await bcrypt.hash(newUser.password, 10),
    //   displayName: newUser.displayName,
    //   email: newUser.email,
    //   year: newUser.year,
    //   major: newUser.major,
    //   college: newUser.college,
    //   selfIntro: newUser.selfIntro,

    // });

  },
  login: async function (loginInfo) {
    var name = [];
    var userId = [];
    var password = [];
    var haveSetProfile = []
    IsError = false;
    await account.where('username','==', loginInfo.username).get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data()); 
              name.push(doc.id);
              password.push(doc.data().password);
              userId.push(doc.data().userId);
              haveSetProfile.push(doc.data().haveSetProfile);
          });  
      })
      .catch(async function(error) {
          IsError = true;
          console.log("Error getting documents: ", error);
      });
      return await new Promise((resolve, reject) => {
        if(IsError){
          const errorObject = {
            success: false,
            message: "password incorrect", //...some error we got back
         }
         reject(errorObject);
        }else{
          if(loginInfo.password == password.pop()) {
            const successObject = {
               msg: 'Success',
               status: true,
               username: name.pop(),
               userId: userId.pop(),
               haveSetProfile: haveSetProfile.pop()
            }
            console.log(successObject);
            resolve(successObject); 
         } else{
           const failObject = {
             msg: 'Fail!',
             status: false
           }
           resolve(failObject);
         }
        }
        
     });
    
      //   account.get().then(function(querySnapshot){
      //     querySnapshot.forEach(function(doc) {
      //       // doc.data() is never undefined for query doc snapshots
      //       console.log(doc.id, " => ", doc.data());
      //   });
      // });
      // account.doc('testaccount').get().then(doc =>{
      //       if (doc.exists) {
      //         console.log(doc.data());
      //         res.send(doc.data());
      //     }
      //     else {
      //         res.send("Nothing");
      //     }
      // }).catch(reason => {
      //     console.log(reason);
      //     res.send(reason);
      // });
      // account.listCollections().then(collections => {
      //   for (let collection of collections) {
      //     console.log(`Found subcollection with id: `);
      //   }
      // });
      
      
    
  }
  ,
  queryAccountInform: async function (data) {
    // query the account information
    console.log(data);
    console.log(account.where(data.fieldname,"==",data.info).get())
    return await account.where(data.fieldname,"==",data.info).get() 
    // .then(querySnapshot=>{
    //   querySnapshot.forEach(data=>{
    //     console.log(data.id);
    //   })
    // }).catch(err=>{
    //   console.log(err);
    // });
  },
  updateProfile: async function (obj) {
    let password = await knex.raw(
      `
      SELECT password FROM account WHERE username = ?;
    `,
      [obj.username]
    );
    password = password[0][0].password;
    if (obj.oldpw != undefined) {
      // change password request with obj.oldpw not undefined
      if (!(await bcrypt.compare(obj.oldpw, password))) {
        // for checking entered old password correct or not
        throw "invalid old password";
      }
    }
    obj.password = await bcrypt.hash(obj.password, 10); // encrypt password
    await knex.raw(
      // updating profile with the passed object of the new information
      `
      UPDATE account SET password = ?, displayName = ?, email = ?, year = ?, major = ?, college = ?, selfIntro = ?
      WHERE username = ?;
    `,
      [
        obj.password,
        obj.displayName,
        obj.email,
        obj.year,
        obj.major,
        obj.college,
        obj.selfIntro,
        obj.username,
      ]
    );
    return;
  },
};
