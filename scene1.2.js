var count_scene2=0;
var target2Open_scene2=true;
var imgAdded_scene2=0;
var max_scene2 = 12;
var target_scene2=1;

function drag_scene2(ev) {
    console.log(ev.target.id);
    ev.dataTransfer.setData("image", ev.target.id);
}
  // cho phép thả 1 phần tử vào 1 phần tử khác
function allowDrop_scene2(ev) {
    ev.preventDefault();
}
  
function drop_scene2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image");
    count_scene2++;
    ev.target.appendChild(document.getElementById(data));
    if(target_scene2 == 1){
      var div = document.getElementById("target1_true_scene2");

      var nodelist = div.getElementsByTagName("img");
    //   console.log(nodelist.length)
      var imgChild=0;
      console.log("max_scene2 + imgAdded_scene2: " + (max_scene2 + imgAdded_scene2))
      for(var i=1; i<=max_scene2 + imgAdded_scene2; i++){
        var tagId="drag"+ i.toString() + "_scene2";
        var img = document.getElementById(tagId);
        var nodelistImg = img.getElementsByTagName("img");
        imgChild += nodelistImg.length;
        console.log("imgChild: "+imgChild);
      }
    
      // console.log("imgChild: " + imgChild);
      if(nodelist.length>nodelist.length - imgChild + imgAdded_scene2 && target_scene2 == 1){
        $("#target1_true_scene2").append(`<img id="drag${max_scene2 + imgAdded_scene2 + 1}_scene2" src="assests/images/block.png" draggable="true" ondragstart="drag_scene2(event)" width="50" height="50" class="blockAdded">`);
        imgAdded_scene2++;
      }
  
      if(nodelist.length - imgChild==10 & target2Open_scene2){
        $(document).ready(function(){
            console.log("sdfsdfsdsdfsduuuupp")
            $("#ones_scene2").append(" <h3 class='descriptionOnes'>Ones</h3>");
            $(".target2_scene2" ).replaceWith('<div class="target3"><div class="target2_true" id="target2_true_scene2" ondrop="drop_scene2(event)" ondragover="allowDrop_scene2(event)"><img></div></div>');
            target2Open_scene2=false;
            target_scene2 = 2;
        });
      }
    }
    
    // xuất target 2
    
    if(target_scene2 == 2){
      console.log( "dfsddddd")
      var div = document.getElementById("target2_true_scene2");
      var nodelist = div.getElementsByTagName("img");

      var imgChild=0;
      console.log("max_scene2 + imgAdded_scene2: " + (max_scene2 + imgAdded_scene2))
      console.log("imgAdded_scene2: "+imgAdded_scene2)
      for(var i=1; i<=max_scene2 + imgAdded_scene2; i++){
        var tagId="drag"+ i.toString() + "_scene2";
        var img = document.getElementById(tagId);
        var nodelistImg = img.getElementsByTagName("img");
        imgChild += nodelistImg.length;
        console.log("imgChild: "+imgChild);
      }
  
      // console.log("imgChild: " + imgChild);
      if(nodelist.length>nodelist.length - imgChild + imgAdded_scene2 ){
        $("#target2_true").append(`<img id="drag${max_scene2 + imgAdded_scene2 + 1}_scene2" src="assests/images/block.png" draggable="true" ondragstart="drag(event)" width="50" height="50" class="blockAdded">`);
        imgAdded_scene2++;
      }
    }
  
}

function finishScene1_2(){
    $("#ball4" ).replaceWith('<img class="ball" src ="assests/images/ball.png" id="ball5_2"></img>');
    var x = document.getElementById("scene1_2");
    x.style.display = "none";
    var startDisplay = document.getElementById("start");
    startDisplay.style.display="block";
}