//this file (src/index.js) is the entry point for webpack

import $ from 'jquery';
import changeColor from "./color.js";

//set onclick event handler for the color-changing button
//set it through document, since the button doesn't exist yet
//and in the event handler check for #changeColor
document.addEventListener("click", changeColor);

//get user's IP address
function getIP()
{
    $.getJSON('https://api.ipify.org?format=json', function(data)
    {
        if (data.ip != null)
        {
            console.log(data.ip);
            //sendIP(data.ip);
        }
    }
)}

//send IP to server
function sendIP(ip)
{
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