var button = document.getElementById("button");
var nude_theme = true;

function change_background(){
  if(nude_theme == false){
    nude_theme = true;
    document.body.style.background = "white";
    button.style.background = "brown";
    button.style.color = "white";

  }else{
    nude_theme = false;
    document.body.style.background = "#F5DEB3";
    button.style.background = "white";
    button.style.color = "black";

  }
}