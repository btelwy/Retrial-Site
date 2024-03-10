//load environmental variables from .env
require('dotenv').config()

const firebaseAdmin = require('firebase-admin');
const functions = require('firebase-functions');

const firebaseConfig =
{
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID
};

firebaseAdmin.initializeApp
({
    credential: firebaseAdmin.credential.cert
    ({
        projectId: process.env.FB_PROJECT_ID,
        clientEmail: process.env.FB_CLIENT_EMAIL,
        privateKey: process.env.FB_PRIVATE_KEY
    }),
    databaseURL: process.env.FB_DATABASE_URL
});

//firebaseApp = firebase.initializeApp(firebaseConfig);

/*sync function getFirestore()
{
    const firestoreCon  = await firebaseAdmin.firestore();

    const writeResult = firestoreCon.collection('sample').doc('sample_doc').get()
    .then(doc => {
        if (!doc.exists) { console.log('No such document!'); }
        else {return doc.data();}
    })
    .catch(err => {
        console.log('Error getting document', err);
    });
    
    return writeResult;
}*/

const express = require('express');
//const updateDatabase = require("./database");

//const host = "127.0.0.1";
//const port = process.env.port || 8000;

const app = express();
app.use(express.json());

app.use(function (request, response, next) {
    // Website you wish to allow to connect
    /*response.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);*/

    response.send("Hello!");

    // Pass to next layer of middleware
    next();
});

app.post('/', (request, response) => {
    const ip = request.body.ip;
    //updateDatabase(ip);
});

//const server = app.listen(port, host, () => {
//    console.log(`Server is running on http://${host}:${port}`);
//});

exports.test = functions.https.onRequest(app);