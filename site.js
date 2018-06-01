/** 
 * siznax.github.io/astroclass 
 **/

var API = {
    "NASA": "https://api.nasa.gov/planetary/apod",
};
var KEY = {
    "NASA": "vE9qJMI31OEuz1O8Wfwkvfj2Jl3mT23X3QgbSWZA",
};

$(function() {

    // slide heaader up/down
    $(document).on('click', "span#header", function() {
        if ($("div#header").is(":visible")) {
            $("div#header").slideUp();
        } else {
            $("div#header").slideDown();
        }
    });

    // toggle sections
    $(document).on('click', "a.button", function() {
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
    // call = "https://api.nasa.gov/planetary/apod?api_key=vE9qJMI31OEuz1O8Wfwkvfj2Jl3mT23X3QgbSWZA&date=2016-03-15";
    console.log(call);
    $.getJSON(call, function(data) {
        if (data.media_type == "video") {
            $("#apod_img").remove();
            $("#apod").prepend("<div id=\"apod_video\"></div>");
            var iframe = "<iframe src=\"" + data.url
                + "\" allowfullscreen></iframe>";
            $("#apod_video").append(iframe);
        }
        $("#apod_img").attr('src', data.url);
        $("#apod_title").text(data.title);
        $("#apod_txt").text(data.explanation);
    });

    if ($("body#test").length) {
        var head = "http://siznax.github.io/astroclass/test/head.html";
        var header = "http://siznax.github.io/astroclass/test/header.html";
        var body = "http://siznax.github.io/astroclass/test/body.html";
        var footer = "http://siznax.github.io/astroclass/test/footer.html";
        $.get(head, function(dhead) {
            $("head").append(dhead);
            $.get(header, function(dheader) {
                $("body").append(dheader);
                $.get(body, function(dbody) {
                    $("div#body").append(dbody);
                    $.get(footer, function(dfooter) {
                        $("body").append(dfooter); });
                });
            });
        });
    };
    
});
