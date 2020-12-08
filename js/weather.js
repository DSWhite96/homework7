function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;
    if (document.querySelector("#location").value) {
        location = document.querySelector("#location").value;
    }
    else {
        location = "Ann Arbor";
    }
    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    // Your code here.
    if (document.querySelector("input[name=temp]:checked")) {
        format = document.querySelector("input[name=temp]:checked").value;
    }
    else {
        format = "imperial";
    }
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=0505b57b02b2704fe78431037b81302e";

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    loc = document.querySelector("#loc");
    temp = document.querySelector("#temp");
    tempImg = document.querySelector("#tempImg");

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc.innerHTML = json["name"];
        temp.innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];
        tempImg.src = "http://openweathermap.org/img/w/" + json["weather"][0]["icon"] + ".png";
        tempImg.alt = json["weather"][0]["description"];
        tempImg.title = json["weather"][0]["main"];
    });
    forcast_div = document.querySelector("#forecast");
    forcast_div.style.display = "block";
}
