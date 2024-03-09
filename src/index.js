// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDd8U7Q52IwcuyQl3vap7zRyM16Ohezy18",
    authDomain: "alrest.firebaseapp.com",
    projectId: "alrest",
    storageBucket: "alrest.appspot.com",
    messagingSenderId: "551886814392",
    appId: "1:551886814392:web:36bdd198751de4e298884d",
    measurementId: "G-32SC75M4QT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import $ from 'jquery';
import changeColor from '../color.js';

//set onclick event handler for the color-changing button
//set it through document, since the button doesn't exist yet
//and in the event handler check for #changeColor
document.addEventListener("click", changeColor);

//get user's IP address
function getIP()
{
    $.getJSON('https://api.ipify.org?format=json', function(data){
        console.log(data.ip);

        if (data.ip != null)
        {
            sendIP(data.ip);
        }
    })
}

//send IP to server
function sendIP(ip)
{
    console.log(ip);

    fetch("http://127.0.0.1:8000",
    {
        method: "POST",
        body: JSON.stringify({ip:ip}),
        headers: 
        {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

//once site is ready
$.when($.ready).then(getIP);