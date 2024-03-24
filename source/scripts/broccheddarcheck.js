async function broccoliCheddarCheck() {
    try {
        const options =
        {
            method: "GET",
            headers: {
                "Cache-Control": "max-age=20",
                "Accept": "text/html"
            }
        }

        //retrieves output of function, which is in HTML format
        let data = await fetch("/callbroccheddar", options);
        let html = await data.text();
        console.log(html);

        if (html.indexOf("Tomato Basil") != -1)
            console.log("yay :)");
        else
            console.log("aww :(");
    }
    //Catch errors
    catch(error) 
    {
        console.log(error);
    }
}

//run check once page is loaded
document.addEventListener("DOMContentLoaded", broccoliCheddarCheck);