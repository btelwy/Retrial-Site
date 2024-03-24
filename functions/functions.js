express = require('express');
const { scrape } = require('./webscrape.js');
admin = require('firebase-admin');
functions = require('firebase-functions');

//load environmental variables from .env file
dotenv = require('dotenv');
dotenv.config();

let app = express();
const cors = require("cors");

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


app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', '*');
    response.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    response.append('Access-Control-Allow-Headers', '*');
    response.append("Cache-Control", "public, max-age=20, s-maxage=600");

    cors({ origin: true });
    
    next();
});

app.get("/callbroccheddar", async (request, response) => {
    const baseUrl = "https://www.foodpro.huds.harvard.edu/foodpro/menu_items.asp?";
    const url = "type=08&meal=1";

    let data = await scrape(baseUrl + url);
    response.status(200).send(data);
});

exports.callbroccheddar = functions.https.onRequest(app);