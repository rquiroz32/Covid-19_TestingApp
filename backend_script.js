$(document).ready(function () {
    var apiKEY = "AIzaSyBNh5KfG7ZYFdl2CMuBiP47FmjmFQvs-aE";
    var covidTestAddress = "";
    var testSiteArray = [];
    var sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + covidTestAddress + "&key=" + apiKEY;
    var placeDetailsURL = "";
    var typeEstablishmentArray = [];
    var mapImgApiKey = "Z7n3t2fnai6LHriDt0pVcxWyZec1O8JJROrBAgjJlZM";


    //API key for hereAPI
    var hereApiKey = 'SWTXu3KMyXT1DwXvXayGN6j8dP4H9ZlmmqPfFWe89kQ'
    var zipLat
    var zipLong

    // Returns Geo Positionging of the location, currently hardcoded to 07005
    var zipCode




    function geoPosition_and_TestingSites() {
        //build out query for zip code 
        var geoCodeQuery = 'https://geocode.search.hereapi.com/v1/geocode?apikey=' + hereApiKey + '&q=' + zipCode + ';country=USA'

        $.ajax({
            url: geoCodeQuery,
            method: "GET"

        }).then(function (response) {


            zipLat = response.items[0].position.lat
            zipLong = response.items[0].position.lng
            console.log(response)
            


            // build out query for test site locations
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
                        img: "https://image.maps.ls.hereapi.com/mia/1.6/mapview?poi=" + zipLat + "," + zipLong + "&poitxs=16&poitxc=black&poifc=yellow&z=14&apiKey=" + mapImgApiKey



                    }

                    testSiteArray.push(testSiteObject);
                  


                    
                    console.log(response)
                    console.log(testSiteObject.img);


                }
                //Feeding this information into a function to get more information
                getInfoFromGoogle(testSiteArray);



            });// closes nested Ajax


        });// closes Ajax

    }

    function getInfoFromGoogle(testSiteArray) {
        for (var i = 0; i < testSiteArray.length; i++) {
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







    // on click event to search by zip code and return covid test sites
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        console.log("successful on click")
        zipCode = $("#search-box").val().trim();
        console.log(zipCode)

        // var poiImg = "https://image.maps.ls.hereapi.com/mia/1.6/mapview?poi=" + testSiteObject.lat + "," + testSiteObject.long + "&poitxs=16&poitxc=black&poifc=yellow&z=14&apiKey=" + mapImgApiKey


        geoPosition_and_TestingSites();
    })//closes zip code search on click event







    //this is the url img for a street address map render
    // var imgURL = "https://image.maps.ls.hereapi.com/mia/1.6/mapview?co=" + country + "&z=17&i=1&ci=" + city + "&s=" + street + "&n="  + "&w=400&apiKey=" + apiKey;


    //this is the url img for a exact location using longitude and latitude map render


    // var imgUrlLatLon = "https://image.maps.ls.hereapi.com/mia/1.6/mapview?c=" + testSiteObject.lat + "," + testSiteObject.long + "&z=12&apiKey=" + mapImgApiKey

    //this is the url img for a exact location using longitude and latitude map render with a point of interest










})// closes doc.ready function