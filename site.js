/** 
 * siznax.github.io/astroclass 
 **/

var API = {
    "NASA": "https://api.nasa.gov/planetary/apod",
    "Astrobin": "http://astrobin.com/api/v1/"
};
var KEY = {
    "NASA": "vE9qJMI31OEuz1O8Wfwkvfj2Jl3mT23X3QgbSWZA",
    "Astrobin": {
        "key": "7ee117a088915d6ed8886d38c70b7d1e83ef7e88",
        "secret": "ea058d21015918d587c6e99d7a3107bb24bdb742"
    }
};

$(function() {

    // slide heaader up/down
    $("span#header").click(function() {
        if ($("div#header").is(":visible")) {
            $("div#header").slideUp();
        } else {
            $("div#header").slideDown();
        }
    });

    // toggle sections
    $("a.button").click(function() {
        var clicked = this.id;
        $(".section").each(function() {
            var selector = "#" + this.id + ".section";
            if (this.id !== clicked) {
                $(selector).css('display', 'none');
            } else {
                $(selector).css('display', 'block');
            }
        });
    });

    // get APOD
    var call = API["NASA"] + "?api_key=" + KEY["NASA"];
    $.getJSON(call, function(data) {
        $("#apod_img").attr('src', data.url);
        $("#apod_title").text(data.title);
        $("#apod_txt").text(data.explanation);
    });

});
