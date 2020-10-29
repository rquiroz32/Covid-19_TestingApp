$(document).ready(function () {


  function myFunction() {                        // Nav link Javascript
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} //closes for loop

var resultsObj = JSON.parse(localStorage.getItem("Results"));
console.log(resultsObj);




for (var i = 0; i < resultsObj.length; i++) {
  console.log(resultsObj[i].address)

  $("#result" + i).text(resultsObj[i].address)
  var imgTag = $("<img>");
  imgTag.attr("src", resultsObj[i].img)
  $("#map" + i).append(imgTag);


}// closes for loop






  //Gets names from local storage
  var nameEst_list = localStorage.getItem("names_establishments");
  nameEst_list = nameEst_list.split(",");
 
  //Gets type of location from local storage
  var estString = localStorage.getItem("last_establishment_array");
  estString = estString.split(",");
 
  //Gets phone numbers
  var phoneList = localStorage.getItem("lastphonenumber");
  phoneList = phoneList.split(",");
 
  //Gets ratings
  var ratingList = localStorage.getItem("lastratingsarray");
  ratingList = ratingList.split(",");
 
  //NEED TO REPLACE WITH resultInfo once I get html from Hever
  var resultEl = $(".result");
 
  for (var i = 0; i < resultEl.length; i++) {
    //Gets the element to display to
    var displayEl = resultEl[i];
 
    //Displaying name of establishment
    var nameToDisplay = nameEst_list[i];
    nameToDisplay = nameToDisplay.replace(/\"/g, "");
 
    //Displaying the type of establishment
    var estDisplay = estString[i];
    var estDisplayFinal = "Type of establishment: " + estDisplay;
    if (estDisplay == "convenience storedrugstore") {
      estDisplay = "convenience store, drug store";
      estDisplayFinal = "Type of establishment: " + estDisplay;
    }
    if (!estDisplay) {
      estDisplay = "not available";
      estDisplayFinal = "Type: unknown";
    }
 
    //Displaying the phone number
    var phoneDisplay = phoneList[i];
    phoneDisplay = phoneDisplay.replace(/\"/g, "");
    var phoneDisplayFinal = "Phone number: " + phoneDisplay;
    if (phoneDisplay == "none available") {
      phoneDisplayFinal = "No phone number available";
    }
 
    //Displaying the google rating 
    var ratingDisplay = ratingList[i];
    var ratingDisplayFinal = "Google rating: " + ratingDisplay + "/5 stars";
    if (ratingDisplay == "none available") {
      ratingDisplayFinal = "Not rated on Google";
    }
    var textToDisplay = nameToDisplay + "<br>" + estDisplayFinal + "<br>" + phoneDisplayFinal + "<br>" + ratingDisplayFinal;
    displayEl.innerHTML = textToDisplay;
  }


});//closes document.ready function

