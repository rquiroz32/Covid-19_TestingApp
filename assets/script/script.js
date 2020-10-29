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







});// closes document.ready function 
