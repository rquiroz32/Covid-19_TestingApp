$(document).ready(function () {
    var apiKEY = "AIzaSyBNh5KfG7ZYFdl2CMuBiP47FmjmFQvs-aE";
    var covidTestAddress = "";
    var testSiteArray = [];
    var sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + covidTestAddress + "&key=" + apiKEY;
    var placeDetailsURL = "";
    var typeEstablishmentArray = [];

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



            var discoverQueryURL = 'https://discover.search.hereapi.com/v1/discover?apikey=' + hereApiKey + '&q=Covid&at=' + zipLat + ',' + zipLong + '&limit=10'
            $.ajax({
                url: discoverQueryURL,
                method: "GET"

            }).then(function (response) {

                for (i = 0; i < response.items.length; i++) {

                    var testSiteObject = {
                        address: response.items[i].address.label.slice(23),
                        phone: response.items[i].contacts[0].phone[0].value,
                        website: response.items[i].contacts[0].www[0].value,
                        lat: response.items[i].access[0].lat,
                        long: response.items[i].access[0].lng,

                    }


                    testSiteArray.push(testSiteObject);

                }
                //Feeding this information into a function to get more information
                getInfoFromGoogle(testSiteArray);

            });// closes nested Ajax


        });// closes Ajax

    }

    function getInfoFromGoogle(testSiteArray) {
        for(var i = 0; i<testSiteArray.length ; i++){
            //Getting the address and using it to update sampleURL
            covidTestAddress = testSiteArray[i].address;
            sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + covidTestAddress + "&key=" + apiKEY;

            //Making ajax call for each one
            $.ajax({
                url: sampleURL,
                method: "GET"
            }).then(function (response) {
                var typeEstablishment = response.results[0].types;
                typeEstablishment = JSON.stringify(typeEstablishment);
                typeEstablishmentArray.push(typeEstablishment);
            });
        
        }
        console.log(typeEstablishmentArray);
    }


    geoPosition_and_TestingSites();

























})