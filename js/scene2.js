var sceneNumber=0;
function showNextScene(){
    var startDisplay = document.getElementById("start");
    if(sceneNumber==0){
      $(document).ready(function(){
        var scene1_1 = document.getElementById("scene2_1");
        scene1_1.style.display = "block";
          startDisplay.style.display="none";
      });
    }
    if(sceneNumber==1){
      $(document).ready(function(){
        var scene1_2 = document.getElementById("scene2_2");
        scene1_2.style.display = "block";
          startDisplay.style.display="none";
      });
    }
    if(sceneNumber==2){
      $(document).ready(function(){
        var scene1_2 = document.getElementById("scene2_3");
        scene1_2.style.display = "block";
          startDisplay.style.display="none";
      });
    }
    sceneNumber++;
  }

var input1=false;
$(document).ready(function(){
    $("#input1").bind("change paste keyup", function() {
        var x = $(this).val(); 
        if (x==1) {
            input1=true;
            console.log("p")
        }
     });
     $("#input2").bind("change paste keyup", function() {
        var y = $(this).val(); 
        if (input1 && y==5){
            setTimeout(function(){
                $("#ball3" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene2_1");
                x.style.display = "none";
                var startDisplay = document.getElementById("start");
                startDisplay.style.display="block";
            },500)
        }
     });
    
});

var input1_scene2=false;
var input2_scene2=false;
$(document).ready(function(){
    $("#input1_scene2").bind("change paste keyup", function() {
        var x = $(this).val(); 
        if (x==1) {
            input1_scene2=true;
        }
     });
     $("#input2_scene2").bind("change paste keyup", function() {
        var y = $(this).val(); 
        if (input1 && y==2){
            input2_scene2=true;
            
        }
     });
     $("#input3_scene2").bind("change paste keyup", function() {
        var z = $(this).val(); 
        if (input1_scene2 && input2_scene2 && z == 12) {
            setTimeout(function(){
                $("#ball2" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene2_2");
                x.style.display = "none";
                var startDisplay = document.getElementById("start");
                startDisplay.style.display="block";
            },500)
        }
     });
});

var input1_scene3=false;
var input2_scene3=false;
$(document).ready(function(){
    $("#input1_scene3").bind("change paste keyup", function() {
        var x = $(this).val(); 
        console.log("X: "+ x)
        if (x==1) {
            input1_scene3=true;
        }
     });
     $("#input2_scene3").bind("change paste keyup", function() {
        var y = $(this).val(); 

        if (input1_scene3=true && y==4){
            input2_scene3=true;
            console.log("y: "+ y)
        }
     });
     $("#input3_scene3").bind("change paste keyup", function() {
        var z = $(this).val(); 
        console.log("z: "+ z)
        if (input1_scene3 && input2_scene3 && z == 14) {
            setTimeout(function(){
                $("#ball1" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
                var x = document.getElementById("scene2_3");
                x.style.display = "none";
                var startDisplay = document.getElementById("finish");
                startDisplay.style.display="block";
            },500)
        }
     });
});