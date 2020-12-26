var admin = require("firebase-admin");

var serviceAccount = require("./team-up-6c707-firebase-adminsdk-zfnx7-dfc31ec88f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://team-up-6c707.firebaseio.com"
});

module.exports ={
    auth: admin.auth(),
    firestore: admin.firestore(),
    admin:admin
}