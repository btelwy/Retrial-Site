//const $ = require('jquery');
//const changeColor = require("./color.js");

//set onclick event handler for the color-changing button
//set it through document, since the button doesn't exist yet
//and in the event handler check for #changeColor
//document.addEventListener("click", changeColor);

//const { error } = require("jquery");

//once site is ready
//$.when($.ready).then(getIP);

//http://127.0.0.1:5001/alrest/us-central1/callbroccheddar
var broccoliCheddarCheck = async () => {
    try {
        var response = await fetch("/callbroccheddar", 
        {
            method: "GET",
            headers: {
                "Accept": "*"
            }
        });

        if (!response.ok)
            throw("response is not okay");
        text = await response.text();

        console.log(text);

        if (text.indexOf("Tomato Basil") != -1)
            console.log("yay :)");
        else
            console.log("aww :(");
    }
    catch 
    {
        console.error(error);
    }
}

broccoliCheddarCheck();