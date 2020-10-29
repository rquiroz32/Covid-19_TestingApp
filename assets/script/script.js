$(document).ready(function(){


  function myFunction() {                        // Nav link Javascript
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  //Modal code

  $("#loadingMessage").on("click",function(){

    $("#modal2").modal()
    
    })


  $("#errorMessage").on("click",function(){

    $("#modal1").modal()
    
    })

})

