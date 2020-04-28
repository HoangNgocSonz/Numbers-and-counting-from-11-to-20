var count=0;
var allow_select1 = true;
var allowForTarget1=false;
var sceneNumber=0;
var target2Open=true;
var imgAdded=0;
var max = 16;
var target=1;

// chỉ cho phép kéo và mục 1 sau 3 s vào màn
setTimeout(function(){
  allowForTarget1=true;
},3000);

// cho phép thả 1 phần tử vào 1 phần tử khác
function allowDrop(ev) {
  if(allowForTarget1){
    ev.preventDefault();
  }
}

// cài đặt dữ liệu kéo đi
function drag(ev) {
  console.log(ev.target.id);
  ev.dataTransfer.setData("image", ev.target.id);
}

// thực hiện khi thả các block vào thẻ div mục tiêu
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("image");
  count++;
  ev.target.appendChild(document.getElementById(data));
  if(target == 1){
    var div = document.getElementById("target1_true");
    console.log(div);
    var nodelist = div.getElementsByTagName("img");

    console.log(nodelist.length)
    var imgChild=0;
    console.log("max + imgAdded: " + (max + imgAdded))
    for(var i=1; i<=max + imgAdded; i++){
      var tagId="drag"+ i.toString();
      var img = document.getElementById(tagId);
      var nodelistImg = img.getElementsByTagName("img");
      imgChild += nodelistImg.length;
    }
  
    // console.log("imgChild: " + imgChild);
    if(nodelist.length>nodelist.length - imgChild + imgAdded && target == 1){
      $("#target1_true").append(`<img id="drag${max + imgAdded + 1}" src="assests/images/block.png" draggable="true" ondragstart="drag(event)" width="50" height="50" class="blockAdded">`);
      imgAdded++;
    }

    if(nodelist.length - imgChild==10 & target2Open){
    
      $(document).ready(function(){
          $("#ones").append(" <h3 class='descriptionOnes'>Ones</h3>");
          $( "div.target2" ).replaceWith('<div class="target3"><div class="target2_true" id="target2_true" ondrop="drop(event)" ondragover="allowDrop2(event)"><img></div></div>');
          target2Open=false;
          target = 2;
      });
    }
  }
  
  // xuất target 2
  
  if(target == 2){
    var div = document.getElementById("target2_true");
    console.log(div);
    var nodelist = div.getElementsByTagName("img");

    console.log(nodelist.length)
    var imgChild=0;
    console.log("max + imgAdded: " + (max + imgAdded))
    for(var i=1; i<=max + imgAdded; i++){
      var tagId="drag"+ i.toString();
      var img = document.getElementById(tagId);
      var nodelistImg = img.getElementsByTagName("img");
      imgChild += nodelistImg.length;
    }

    // console.log("imgChild: " + imgChild);
    if(nodelist.length>nodelist.length - imgChild + imgAdded ){
      $("#target2_true").append(`<img id="drag${max + imgAdded + 1}" src="assests/images/block.png" draggable="true" ondragstart="drag(event)" width="50" height="50" class="blockAdded">`);
      imgAdded++;
    }
  }

  // hiện lựa chọn khi hoàn thành di chuyển block
  if(count==16){
    $(document).ready(function(){
      $("#select1").append($("#hide1").html());
    });
  }

}

// hiển thị câu hỏi dạng điền thực hiện sau khi hoàn hành việc thả các block
function showSelect() {
  $("#toRemove").remove();
  $( "div#mlem" ).replaceWith('<div class="col-4" id="mlem"><div class="tenOrOnes" id="hide11"><div class="button" id="button1"  ><h3 style="color:rgb(32, 194, 32);">tens</h3></div><div class="button" id="button2"><h3 > ones</h3></div></div></div>');
  setTimeout(function(){
      $( "div#mlem" ).replaceWith('<h3 style="margin-left:34px; margin-top:18px" class="tensAnimation">tens</h3>');
  },600)
  
  setTimeout(function(){
    if(allow_select1==true){
      $(document).ready(function(){
  
        $("#select2").append($("#hide2").html());
      });
      allow_select1=false;
    }
  },3000)
}

function finishScene1_1() {
  $("#toRemove2").remove();
  $("div#toReplace" ).replaceWith('<div class="col-4" id="toReplace"><div class="tenOrOnes"><div class="button" id="button1"><h3 >tens</h3></div><div class="button" id="button2"  ><h3 onClick="finishScene1_1()" id="hide" style="color:rgb(32, 194, 32);">ones</h3></div></div></div>');
  setTimeout(function(){
      $("div#toReplace" ).replaceWith('<h3 style="margin-left:34px; margin-top:61px;" class="onesAnimation">ones</h3>');
      setTimeout(function(){
        $("#ball5" ).replaceWith('<img class="ball" src ="assests/images/ball.png" id="ball5_2"></img>');
        var x = document.getElementById("scene1_1");
        x.style.display = "none";
        var startDisplay = document.getElementById("start");
        startDisplay.style.display="block";
    },2000)
  },600)
  
}

function allowDrop2(ev) {
  if(count>=10){
    ev.preventDefault();
  }
}
// hiển thị màn tiếp theo khi ấn vào màn hình start
function showNextScene(){
  
  var startDisplay = document.getElementById("start");
  if(sceneNumber==0){
    $(document).ready(function(){
      var scene1_1 = document.getElementById("scene1_1");
      scene1_1.style.display = "block";
        startDisplay.style.display="none";
    });
  }
  if(sceneNumber==1){
    $(document).ready(function(){
      var scene1_2 = document.getElementById("scene1_2");
      scene1_2.style.display = "block";
        startDisplay.style.display="none";
    });
  }
  if(sceneNumber==2){
    $(document).ready(function(){
      var scene1_2 = document.getElementById("scene1_3");
      scene1_2.style.display = "block";
        startDisplay.style.display="none";
    });
  }
  if(sceneNumber==3){
    $(document).ready(function(){
      var scene1_2 = document.getElementById("scene1_4");
      scene1_2.style.display = "block";
        startDisplay.style.display="none";
    });
  }
  if(sceneNumber==4){
    $(document).ready(function(){
      var scene1_2 = document.getElementById("scene1_5");
      scene1_2.style.display = "block";
        startDisplay.style.display="none";
    });
  }
  sceneNumber++;
}




