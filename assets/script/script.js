/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */

function siteInfo(){
    document.getElementById('siteInfo').innerHTML = "Test locations within 10 miles: <br> <br> Site1 <br> Site2 <br> Site3 <br> <br> (Backend team will finalize integrate API/JavaScript here)";
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
