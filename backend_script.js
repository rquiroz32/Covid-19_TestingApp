$(document).ready(function () {
    var apiKEY = "AIzaSyBNh5KfG7ZYFdl2CMuBiP47FmjmFQvs-aE";
    var covidTestAddress = "";
    var testSiteArray = []
    var sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + covidTestAddress + "&key=" + apiKEY;
    var placeDetailsURL = "";

    //API key for hereAPI
    var hereApiKey = 'SWTXu3KMyXT1DwXvXayGN6j8dP4H9ZlmmqPfFWe89kQ'
    var zipLat
    var zipLong

    // Returns Geo Positionging of the location, currently hardcoded to 07005
    var zipCode = '07005'
    var geoCodeQuery = 'https://geocode.search.hereapi.com/v1/geocode?apikey=' + hereApiKey + '&q=' + zipCode + ';country=USA'



    function geoPosition_and_TestingSites() {


        $.ajax({
            url: geoCodeQuery,
            method: "GET"

        }).then(function (response) {


            zipLat = response.items[0].position.lat
            zipLong = response.items[0].position.lng
            console.log(zipLat)
            console.log(zipLong)



            var discoverQueryURL = 'https://discover.search.hereapi.com/v1/discover?apikey=' + hereApiKey + '&q=Covid&at=' + zipLat + ',' + zipLong + '&limit=10'
            $.ajax({
                url: discoverQueryURL,
                method: "GET"

            }).then(function (response) {

                console.log(response)
                for (i = 0; i < response.items.length; i++) {

                    var testSiteObject = {
                        address: response.items[i].address.label.slice(23),
                        phone: response.items[i].contacts[0].phone[0].value,
                        website: response.items[i].contacts[0].www[0].value,
                        lat: response.items[i].access[0].lat,
                        long: response.items[i].access[0].lng,
                    
                    }

                 
                    testSiteArray.push(testSiteObject)
                    
                }
                console.log(testSiteArray)

            });// closes nested Ajax


        });// closes Ajax

    }





    covidTestAddress = "Rite+Aid,+Parsippany,+NJ"
    sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + covidTestAddress + "&key=" + apiKEY;
    $.ajax({
        url: sampleURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var endPlaceId = response.results[0].place_id;
        placeDetailsURL = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + endPlaceId + "&fields=name,rating,formatted_phone_number&key=" + apiKEY;
    });


    geoPosition_and_TestingSites();

























})