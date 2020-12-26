/*
 * COMPONENT NAME: RESTAURANTSERVICES
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE RESTAURANT SERVICES OF THE EXPRESS.JS.
 *          SERVICES MEANS THAT DOING THE SERVICE EXACTLY IN HERE.
 *
 *
 */

const admin = require('../firebaseAdmin');
let location = admin.firestore.collection('Destination');
let valueCount = admin.firestore.collection('valueCount');

const knex = require("knex")(require("../../knexfile.js")["development"]);

module.exports = {
  getAllLocation: async function () {
    let data = [];
    let success = true,errmsg = "";
    // by defining const knex to th right local db. we select all from db restaurant_details.
    const querySnapshot = await location.get().catch(err=>{
      success = false;
      errmsg = err;
    });
    
    querySnapshot.forEach(doc=>{
      data.push(doc.data());
    })
    
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
            message: "", //...some error we got back
         }
         reject(errorObject);
      }
   });
  },
  getComment: async function (restaurantName) {
    // the obtained value restaurantName in controller is sent to service as parameter and get info from db feedback.
    return await knex("feedback")
      .select("*")
      .where({ restaurantName: restaurantName });
  },
  commentAndRating: async function (obj) {
    // the req.body.obj is sent here and retrieve its value by obj.key to the db respectively
    return await knex("feedback").insert({
      restaurantName: obj.restaurantName,
      opinion: obj.opinion,
      rating: obj.rating,
    });
  },
};
