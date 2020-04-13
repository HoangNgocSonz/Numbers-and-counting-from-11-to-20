var count=0;
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    count++;
    console.log(count);
    if(count==10){
      $(document).ready(function(){
          $("#ones").append(" <h2 class='description'>Ones</h2>");
      });
    }
    if(count==16){
      $(document).ready(function(){
        $("#ones").append(" <h2 class='description'>Ones</h2>");
    });
    }
    ev.target.appendChild(document.getElementById(data));
  }

  
