$(document).ready(function () {
    var apiKEY = "AIzaSyBNh5KfG7ZYFdl2CMuBiP47FmjmFQvs-aE";
    var address1 = "";
    var address2 = "";
    var sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address1 + "&key=" + apiKEY;
    var placeDetailsURL = "";


    address1 = "1+Richmond+St,+New+Brunswick,+NJ"
    sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address1 + "&key=" + apiKEY;
    $.ajax({
        url: sampleURL,
        method: "GET"
    }).then(function (response) {
        var startPlaceId = response.results[0].place_id;
    });

    address2 = "Rite+Aid,+Parsippany,+NJ"
    sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address2 + "&key=" + apiKEY;
    $.ajax({
        url: sampleURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var endPlaceId = response.results[0].place_id;
        placeDetailsURL = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + endPlaceId + "&fields=name,rating,formatted_phone_number&key=" + apiKEY;
    });


})