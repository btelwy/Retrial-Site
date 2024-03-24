//const $ = require('jquery');
//const changeColor = require("./color.js");

//set onclick event handler for the color-changing button
//set it through document, since the button doesn't exist yet
//and in the event handler check for #changeColor
//document.addEventListener("click", changeColor);

//const { error } = require("jquery");

//once site is ready
//$.when($.ready).then(getIP);


async function broccoliCheddarCheck() {
    try {
        var data = await fetch("/callbroccheddar", 
        {
            method: "GET",
            headers: {
                "Cache-Control": "max-age=20",
                "Accept": "application/json"
            }
        });

        console.log(data);

        if (data.indexOf("Tomato Basil") != -1)
        {
            console.log("yay :)");
            console.log(data);
        }

        else
            console.log("aww :(");
    }
    catch(error) {
        throw(new Error("Caught an error"));
    }
}

broccoliCheddarCheck();