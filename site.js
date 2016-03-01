/** 
 * siznax.github.io/astroclass 
 **/

var API = {
    "NASA": "https://api.nasa.gov/planetary/apod",
    "Astrobin": "TBD"
};
var KEY = {
    "NASA": "vE9qJMI31OEuz1O8Wfwkvfj2Jl3mT23X3QgbSWZA",
    "Astrobin": "TBD"
};

$(function() {

    // get APOD
    var call = API["NASA"] + "?api_key=" + KEY["NASA"];
    $.getJSON(call, function(data) {
        $("#apod_img").attr('src', data.url);
        $("#apod_title").text(data.title);
        $("#apod_txt").text(data.explanation);
    });

});
