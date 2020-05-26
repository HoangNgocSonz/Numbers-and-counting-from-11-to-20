var sceneNumber=0;
function showNextScene(){
    var startDisplay = document.getElementById("start");
    if(sceneNumber==0){
      $(document).ready(function(){
        var scene1_1 = document.getElementById("scene3_1");
        scene1_1.style.display = "block";
          startDisplay.style.display="none";
      });
    }
    if(sceneNumber==1){
      $(document).ready(function(){
        var scene1_2 = document.getElementById("scene3_2");
        scene1_2.style.display = "block";
          startDisplay.style.display="none";
      });
    }
    if(sceneNumber==2){
      $(document).ready(function(){
        var scene1_2 = document.getElementById("scene3_3");
        scene1_2.style.display = "block";
          startDisplay.style.display="none";
      });
    }
    if(sceneNumber==3){
        $(document).ready(function(){
          var scene1_2 = document.getElementById("scene3_4");
          scene1_2.style.display = "block";
            startDisplay.style.display="none";
        });
      }
      if(sceneNumber==4){
        $(document).ready(function(){
          var scene1_2 = document.getElementById("scene3_5");
          scene1_2.style.display = "block";
            startDisplay.style.display="none";
        });
      }
    sceneNumber++;
}


$(document).ready(function(){
    $("#input1").bind("change paste keyup", function() {
        var x = $(this).val(); 
        if (x==14) {
            setTimeout(function(){
                $("#ball5" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene3_1");
                x.style.display = "none";
                var startDisplay = document.getElementById("start");
                startDisplay.style.display="block";
            },500)
        }
     });
     $("#input1_scene2").bind("change paste keyup", function() {
        var x = $(this).val(); 
        if (x==18) {
            setTimeout(function(){
                $("#ball4" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene3_2");
                x.style.display = "none";
                var startDisplay = document.getElementById("start");
                startDisplay.style.display="block";
            },500)
        }
     });
     $("#input1_scene3").bind("change paste keyup", function() {
        var x = $(this).val(); 
        if (x==12) {
            setTimeout(function(){
                $("#ball3" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene3_3");
                x.style.display = "none";
                var startDisplay = document.getElementById("start");
                startDisplay.style.display="block";
            },500)
        }
     });
     $("#input1_scene4").bind("change paste keyup", function() {
        var x = $(this).val(); 
        if (x==15) {
            setTimeout(function(){
                $("#ball2" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene3_4");
                x.style.display = "none";
                var startDisplay = document.getElementById("start");
                startDisplay.style.display="block";
            },500)
        }
     });
     $("#input1_scene5").bind("change paste keyup", function() {
        var x = $(this).val(); 
        if (x==12) {
            setTimeout(function(){
                $("#ball1" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene3_5");
                x.style.display = "none";
                var startDisplay = document.getElementById("finish");
                startDisplay.style.display="block";
            },500)
        }
     });
});