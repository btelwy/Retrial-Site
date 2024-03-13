function changeColor(event)
{
    //called on button click event
    //but the button doesn't exist yet, so check for it
    
    var element = event.target;
    
    //if the event target has the correct ID
    if (Object.is(element, document.querySelector("#colorChange")))
    {
        //the CSS color variable
        var root = document.querySelector(':root');

        const r = (Math.random() * 255);
        const g = (Math.random() * 255);
        const b = (Math.random() * 255);

        root.style.setProperty('--var-color', `rgb(${r}, ${g}, ${b})`);
    }
}

export default changeColor;