/**$(document).ready(function () {
    //API key for google geocode
    var apiKEY = "AIzaSyBNh5KfG7ZYFdl2CMuBiP47FmjmFQvs-aE";
    //Making empty strings to be defined with places
    var addressOfUser = "";
    var endPtAddress = "";
    var sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressOfUser + "&key=" + apiKEY;
    var placeDetailsURL = "";
    //Usine Julie's address as an example
    addressOfUser = "1+Richmond+St,+New+Brunswick,+NJ"
    sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressOfUser + "&key=" + apiKEY;
    $.ajax({
        url: sampleURL,
        method: "GET"
    }).then(function (response) {
        var startPlaceId = response.results[0].place_id;
    });
    endPtAddress = "Rite+Aid,+Parsippany,+NJ"
    sampleURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + endPtAddress + "&key=" + apiKEY;
    $.ajax({
        url: sampleURL,
        method: "GET"
    }).then(function (response) {
        var typeOfBusiness = response.results[0].types;
        console.log(typeOfBusiness);
    });
}) */


var hereApiKey = 'SWTXu3KMyXT1DwXvXayGN6j8dP4H9ZlmmqPfFWe89kQ'




// Returns Geo Positionging of the location
var zipCode = '07005'
var geoCodeQuery = 'https://geocode.search.hereapi.com/v1/geocode?apikey='+ apiKey + '&q=' + zipCode+ ';country=USA' 


var zipLat
var zipLong

//works
//var testQuery = 'https://geocode.search.hereapi.com/v1/geocode?apikey='+ apiKey + '&q=08854;country=USA' 





//Brooklyn, NY 

$(document).ready(function(){





$.ajax({
    url: geoCodeQuery,
    method: "GET"

}).then(function(response){

    console.log(response)

    zipLat = response.items[0].position.lat
    zipLong = response.items[0].position.lng
    console.log(zipLat)
    console.log(zipLong)



    var discoverQueryURL = 'https://discover.search.hereapi.com/v1/discover?apikey='+apiKey+'&q=Covid&at='+zipLat+','+ zipLong+'&limit=10'
    $.ajax({
        url: discoverQueryURL,
        method: "GET"
    
    }).then(function(response){
    
        console.log(response)
    
    
    });// closes nested Ajax
    
    



});// closes Ajax



























});// closes doc ready function THIS MUST SURROUND ALL OUR jQUERY