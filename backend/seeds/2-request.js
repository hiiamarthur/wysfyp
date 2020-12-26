/*
    set the demo data of request table
*/

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("request")
    .del()
    .then(function () {
      // Inserts seed entries - requests
      return knex("request").insert([
        {
          requestID: 1,
          requestName: "Let's have an unforgettable evening :)",
          location: "Paper&Coffee",
          date: "2020-06-29",
          startingTime: "19:00:00",
          endingTime: "20:00:00",
          createUser: "harry",
          stateVegetarian: 0,
          stateFinish: 0,
        },
        {
          requestID: 2,
          requestName: "Wanna meet new friend :)",
          location: "SeeYou@Shaw (with Café)",
          date: "2020-05-20",
          startingTime: "12:30:00",
          endingTime: "13:45:00",
          createUser: "long",
          stateVegetarian: 0,
          stateFinish: 0,
        },
        {
          requestID: 3,
          requestName: "Let's try the teaset!!",
          location: "Canteen of CW Chu College",
          date: "2020-07-26",
          startingTime: "11:30:00",
          endingTime: "12:30:00",
          createUser: "charlie",
          stateVegetarian: 1,
          stateFinish: 0,
        },
        {
          requestID: 4,
          requestName: "NA tui rice",
          location: "NA College Student Canteen",
          date: "2020-05-03",
          startingTime: "19:00:00",
          endingTime: "21:00:00",
          createUser: "arthur",
          stateVegetarian: 0,
          stateFinish: 1,
        },
        {
          requestID: 5,
          requestName: "Let's high tea at WS",
          location: "LWS College - Cafe Tolo",
          date: "2020-05-30",
          startingTime: "15:15:00",
          endingTime: "16:00:00",
          createUser: "jane",
          stateVegetarian: 1,
          stateFinish: 0,
        },
      ]);
    });
};
