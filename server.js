const firebase = require('firebase');
const firebaseAdmin = require('firebase-admin');
var serviceAccount = require("alrest-firebase-adminsdk-e5oym-a51ad289d1.json");

firebaseAdmin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount)
    }
);

firebase.initializeApp(
    {
        
    }
);

const express = require('express');
const updateDatabase = require("./database");

const host = "127.0.0.1";
const port = "8000";

const app = express();
app.use(express.json());

app.use(function (request, response, next) {

    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

expressApp.post('/', (request, response) => {
    const ip = request.body.ip;
    //console.log(ip);
    updateDatabase(ip);
});

const server = app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});