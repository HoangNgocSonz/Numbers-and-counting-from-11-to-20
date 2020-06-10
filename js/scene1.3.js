var count_scene3=0;
function allowDrop_scene3(ev) {
    ev.preventDefault();
    console.log(1)
}

function drag_scene3(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(2)
}

function drop_scene3(ev) {
    count_scene3++;
    console.log("c: " + count_scene3)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
    console.log(3)
}
function finishScene1_3(){
    if(count_scene3>=6){
        $("#ball3" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
        var x = document.getElementById("scene1_3");
        x.style.display = "none";
        var startDisplay = document.getElementById("start");
        startDisplay.style.display="block";
    }
}
function finishScene1_4(){
    if(count_scene3>=8){
        $("#ball2" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
        var x = document.getElementById("scene1_4");
        x.style.display = "none";
        var startDisplay = document.getElementById("start");
        startDisplay.style.display="block";
    }
}
function finishScene1_5(){
    if(count_scene3>=13){
        $("#ball1" ).replaceWith('<img class="ball" src ="../assests/images/ball.png" id="ball5_2"></img>');
        var x = document.getElementById("scene1_5");
        x.style.display = "none";
        var startDisplay = document.getElementById("finish");
        startDisplay.style.display="block";
    }
}