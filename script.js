
var apiKey = 'SWTXu3KMyXT1DwXvXayGN6j8dP4H9ZlmmqPfFWe89kQ'
var discoverQueryURL = 'https://discover.search.hereapi.com/v1/discover?apikey='+apiKey+'&q=Covid&at=30.22,-92.02&limit=10'
//queryURL = 'https://discover.search.hereapi.com/v1/discover?apikey={{apiKey}}&q=Covid&at=30.22,-92.02&limit=10'

var geoCodeQueryURL= "https://geocode.search.hereapi.com/v1/geocode?apikey=" + apiKey + '&q=Covid&qq=city=Atlanta;state=Georgia;'

// Returns Geo Positionging of the location
var zipCode = '07005'
var testQuery = 'https://geocode.search.hereapi.com/v1/geocode?apikey='+ apiKey + '&q=' + zipCode+ ';country=USA' 
console.log(testQuery)

var zipLat
var zipLong

//works
//var testQuery = 'https://geocode.search.hereapi.com/v1/geocode?apikey='+ apiKey + '&q=08854;country=USA' 





//Brooklyn, NY 

$(document).ready(function(){





$.ajax({
    url: testQuery,
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