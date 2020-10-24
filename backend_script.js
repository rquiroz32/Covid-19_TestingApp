$(document).ready(function () {
    var apiKEY = "AIzaSyBNh5KfG7ZYFdl2CMuBiP47FmjmFQvs-aE";
    var address1 = "";
    var address2 = "";
    var sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address1 + "&key=" + apiKEY;
    var placeDetailsURL = "";

    //API key for hereAPI
    var hereApiKey = 'SWTXu3KMyXT1DwXvXayGN6j8dP4H9ZlmmqPfFWe89kQ'
    var zipLat
    var zipLong

    // Returns Geo Positionging of the location, currently hardcoded to 07005
    var zipCode = '07005'
    var geoCodeQuery = 'https://geocode.search.hereapi.com/v1/geocode?apikey=' + apiKey + '&q=' + zipCode + ';country=USA'


    function geoPosition_and_TestingSites() {


        $.ajax({
            url: geoCodeQuery,
            method: "GET"

        }).then(function (response) {

            console.log(response)

            zipLat = response.items[0].position.lat
            zipLong = response.items[0].position.lng
            console.log(zipLat)
            console.log(zipLong)



            var discoverQueryURL = 'https://discover.search.hereapi.com/v1/discover?apikey=' + apiKey + '&q=Covid&at=' + zipLat + ',' + zipLong + '&limit=10'
            $.ajax({
                url: discoverQueryURL,
                method: "GET"

            }).then(function (response) {

                console.log(response)


            });// closes nested Ajax


        });// closes Ajax

    }



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