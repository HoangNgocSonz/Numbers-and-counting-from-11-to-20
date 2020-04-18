var count=0;
var allow_select1 = true;
var allowForTarget1=false;
var sceneNumber=0;
var target2Open=true;

// chỉ cho phép kéo và mục 1 sau 3 s vào màn
setTimeout(function(){
  allowForTarget1=true;
},3000);

// cho phép thả 1 phần tử vào 1 phần tử khác
function allowDrop(ev) {
  var div = document.getElementById("target1_true");
  var nodelist = div.getElementsByTagName("img");
  if(allowForTarget1&nodelist.length<10){
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
  var div = document.getElementById("target1_true");
  var nodelist = div.getElementsByTagName("img");

  if(nodelist.length==10 & target2Open){
    console.log("10");
    $(document).ready(function(){
        $("#ones").append(" <h2 class='descriptionOnes'>Ones</h2>");
        $( "div.target2" ).replaceWith('<div class="target3"><div class="target2_true" id="div1" ondrop="drop(event)" ondragover="allowDrop2(event)"></div></div>');
        target2Open=false;
    });
  }
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
      var x = document.getElementById("scene1_1");
        x.style.display = "block";
        startDisplay.style.display="none";
    });
  }
  if(sceneNumber==1){
    $("#ball5" ).replaceWith('<img class="ball" src ="assests/images/ball.png" id="ball5_2"></img>');
    $(document).ready(function(){
      var x = document.getElementById("scene1_2");
        x.style.display = "block";
        startDisplay.style.display="none";
    });
  }
  sceneNumber++;
}

