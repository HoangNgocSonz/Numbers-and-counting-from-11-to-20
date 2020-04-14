var count=0;
var allow_select1 = true;

function allowDrop(ev) {
  ev.preventDefault();
}
  
function drag(ev) {
  console.log(ev.target.id);
  ev.dataTransfer.setData("image", ev.target.id);
}
  
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("image");
  count++;
  if(count==10){
    $(document).ready(function(){
        $("#ones").append(" <h2 class='description'>Ones</h2>");
    });
  }
  if(count==16){
    $(document).ready(function(){
      $("#select1").append($("#hide1").html());
    });
  }
  ev.target.appendChild(document.getElementById(data));
}

function showSelect() {
  $("#toRemove").remove();
  $("#toRemove").remove();
  $("#select1").append('<div style="margin-left: 165px; margin-top:32px"><h2>1 bar = 1 tens</h2></div>');
  console.log("ok")
  if(allow_select1==true){
    $(document).ready(function(){

      $("#select2").append($("#hide2").html());
    });
    allow_select1=false;
  }
}

function showSelect2() {
  $("#toRemove2").remove();
  $("#toRemove2").remove();
  $("#select2").append('<div style="margin-left: 115px; margin-top:32px"><h2>6 blocks = 6 ones</h2></div>');
  
}


  
