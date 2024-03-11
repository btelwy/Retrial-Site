//load environmental variables from .env file
import dotenv from 'dotenv';
dotenv.config();

import admin from 'firebase-admin';
import functions from 'firebase-functions';

//information that may or may not be needed
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

admin.initializeApp
({
    credential: admin.credential.cert
    ({
        projectId: process.env.FB_PROJECT_ID,
        clientEmail: process.env.FB_CLIENT_EMAIL,
        privateKey: process.env.FB_PRIVATE_KEY
    }),
    databaseURL: process.env.FB_DATABASE_URL
});

const express = require('express');
//const updateDatabase = require("./database");

const app = express();
app.use(express.json());

app.use(function (request, response, next) 
{
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