/*
    set the demo data of restaurant_details table
*/

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("restaurant_details")
    .del()
    .then(function () {
      // Inserts seed entries - restaruant details
      return knex("restaurant_details").insert([
        {
          restaurantName: "Basic Medical Sciences Building Snack Bar",
          restaurantDestination:
            "G/F, Basic Medical Sciences Building, Central Campus",
          dailyOpeningTime: "07:45:00",
          dailyClosingTime: "18:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "BFC Coffee Corner",
          restaurantDestination:
            "G/F, Benjamin Franklin Centre, Central Campus",
          dailyOpeningTime: "07:30:00",
          dailyClosingTime: "19:30:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "BFC Staff Canteen",
          restaurantDestination:
            "G/F, Benjamin Franklin Centre, Central Campus, The Chinese University of Hong Knog, Sha Tin",
          dailyOpeningTime: "11:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "11:00:00",
          holidayClosingTime: "21:00:00",
        },
        {
          restaurantName: "BFC Student Canteen",
          restaurantDestination:
            "G/F, Benjamin Franklin Centre, Central Campus",
          dailyOpeningTime: "11:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "BFC Vegetarian Food Shop",
          restaurantDestination: "Shop G14, G/F, Benjamin Franklin Centre",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "LSK Building Coffee Shop",
          restaurantDestination: "LG, Lee Shau Kee Building",
          dailyOpeningTime: "08:30:00",
          dailyClosingTime: "17:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "Women Cooperative Store",
          restaurantDestination: "LG, Benjamin Franklin Centre",
          dailyOpeningTime: "07:30:00",
          dailyClosingTime: "11:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "CC College Staff Club",
          restaurantDestination: "Chung Chi College Staff Club",
          dailyOpeningTime: "11:00:00",
          dailyClosingTime: "23:00:00",
          holidayOpeningTime: "10:00:00",
          holidayClosingTime: "23:00:00",
        },
        {
          restaurantName: "CC College Student Canteen",
          restaurantDestination: "Chung Chi Tang, Chung Chi College",
          dailyOpeningTime: "07:30:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "07:30:00",
          holidayClosingTime: "21:00:00",
        },
        {
          restaurantName: "Li Wai Chun Building Café",
          restaurantDestination: "G/F, Li Wai Chun Building, Chung Chi College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "20:00:00",
          holidayOpeningTime: "08:30:00",
          holidayClosingTime: "20:00:00",
        },
        {
          restaurantName: "Orchid Lodge",
          restaurantDestination:
            "Orchid Lodge, Next to Ho Tim Building, Chung Chi College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "20:30:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "Paper&Coffee",
          restaurantDestination: "2/F, Pommerenke Student Centre",
          dailyOpeningTime: "10:00:00",
          dailyClosingTime: "17:30:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "Ebeneezer's Kebabs & Pizzeria",
          restaurantDestination: "Shop G05, Li Wai Chun Building",
          dailyOpeningTime: "10:00:00",
          dailyClosingTime: "20:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "NA College Staff Canteen",
          restaurantDestination:
            "G/F, Staff Student Centre - Leung Hung Kee Building, New Asia College",
          dailyOpeningTime: "12:00:00",
          dailyClosingTime: "14:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "NA College Student Canteen",
          restaurantDestination:
            "G/F, Staff Student Centre - Leung Hung Kee Building, New Asia College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "11:00:00",
          holidayClosingTime: "21:00:00",
        },
        {
          restaurantName: "NA College Yun Chi Hsien",
          restaurantDestination:
            "G/F, Staff Student Centre - Leung Hung Kee Building, New Asia College",
          dailyOpeningTime: "12:00:00",
          dailyClosingTime: "14:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "UC Staff Canteen",
          restaurantDestination:
            "G/F, Cheung Chuk Shan Amenities Building, United College",
          dailyOpeningTime: "11:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "UC Staff Common Room",
          restaurantDestination:
            "G/F, Cheung Chuk Shan Amenities Building, United College",
          dailyOpeningTime: null,
          dailyClosingTime: null,
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "UC Student Canteen",
          restaurantDestination:
            "G/F, Cheung Chuk Shan Amenities Building, United College",
          dailyOpeningTime: "08:15:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "UC Si Yuan Amenities Centre",
          restaurantDestination: "LG, T.C. Cheng Building, United College",
          dailyOpeningTime: "17:00:00",
          dailyClosingTime: "23:00:00",
          holidayOpeningTime: "15:00:00",
          holidayClosingTime: "23:00:00",
        },
        {
          restaurantName: "Staff Common Room Clubhouse",
          restaurantDestination:
            "G/F, Pentecostal Mission Hall Complex (High Block)",
          dailyOpeningTime: null,
          dailyClosingTime: null,
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "SeeYou@Shaw (with Café)",
          restaurantDestination: "G/F, Kuo Mou Hall, Shaw College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "Morningside College Dining Hall",
          restaurantDestination:
            "LG1, Maurice R. Greenberg Building, Morningside College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "08:00:00",
          holidayClosingTime: "22:00:00",
        },
        {
          restaurantName: "Morningside College Café",
          restaurantDestination: "G/F, Tower Block, Morningside College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "10:00:00",
          holidayClosingTime: "20:00:00",
        },
        {
          restaurantName: "Canteen of S.H. Ho College(with Café)",
          restaurantDestination: "1/F, Chan Chun Ha Hall, SHHO College",
          dailyOpeningTime: "07:30:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "11:30:00",
          holidayClosingTime: "20:00:00",
        },
        {
          restaurantName: "Connexion",
          restaurantDestination: "1/F, Chan Chun Ha Hall, SHHO College",
          dailyOpeningTime: "11:30:00",
          dailyClosingTime: "14:30:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "Canteen of CW Chu College",
          restaurantDestination: "G/F, CW Chu College",
          dailyOpeningTime: "09:00:00",
          dailyClosingTime: "18:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "WYS College Student Canteen",
          restaurantDestination: "LG/F, West Wing, Wu Yee Sun College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "08:00:00",
          holidayClosingTime: "21:00:00",
        },
        {
          restaurantName: "LWS College - WS Pavilion",
          restaurantDestination: "LG2, Lee Woo Sing College",
          dailyOpeningTime: "07:30:00",
          dailyClosingTime: "21:30:00",
          holidayOpeningTime: "09:00:00",
          holidayClosingTime: "21:30:00",
        },
        {
          restaurantName: "LWS College - The Harmony",
          restaurantDestination: "2/F., Lee Woo Sing College",
          dailyOpeningTime: "11:30:00",
          dailyClosingTime: "21:30:00",
          holidayOpeningTime: "11:30:00",
          holidayClosingTime: "21:30:00",
        },
        {
          restaurantName: "LWS College - Cafe Tolo",
          restaurantDestination: "G/F., Lee Woo Sing College",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "22:00:00",
          holidayOpeningTime: "10:00:00",
          holidayClosingTime: "22:00:00",
        },
        {
          restaurantName: "LWS College - The Green",
          restaurantDestination: "LG2, Lee Woo Sing College",
          dailyOpeningTime: "11:00:00",
          dailyClosingTime: "21:00:00",
          holidayOpeningTime: "11:00:00",
          holidayClosingTime: "21:00:00",
        },
        {
          restaurantName: "The Stage",
          restaurantDestination: "3/F, Cheng Yu Tung Building",
          dailyOpeningTime: "08:15:00",
          dailyClosingTime: "17:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
        {
          restaurantName: "Café 330",
          restaurantDestination:
            "Shop 101A, 1/F, Yasumoto International Academic Park",
          dailyOpeningTime: "08:00:00",
          dailyClosingTime: "20:00:00",
          holidayOpeningTime: null,
          holidayClosingTime: null,
        },
      ]);
    });
};
