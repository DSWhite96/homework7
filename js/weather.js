function gettingJSON(){
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;
    if (document.querySelector("#location").value) {
        location = document.querySelector("#location").value;
    }
    else {
        location = "Ann Arbor, USA"
    }
    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    // Your code here.
    format = document.querySelector("input[name=temp]:checked");
    if (!format) {
        //console.log("Format is " + format.value);
        format = "imperial";
        console.log("Format is " + format);
    }
    else {
        console.log("Format is " + format.value); 
    }

    //set the query  
    let query;
    // Your code here.  
    query = "api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=0505b57b02b2704fe78431037b81302e";
    //let api_key;
    //api_key = "0505b57b02b2704fe78431037b81302e";
    //console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
    });
}
