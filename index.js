var d = document.querySelectorAll(".drum").length;
for (var i = 0; i < d; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelectorAll("button")[i].style.color="black";
    var b = this.innerHTML;
    switch (b) {
      case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      default:
        console.log(b);
    }
  });
}
for (var i = 0; i < d; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var b = this.innerHTML;
    makesound(b);
    animation(b);
  });
}

document.addEventListener("keypress", function (Event) {
  makesound(Event.key);
  animation(Event.key);
});
function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    default:
      console.log(key);
  }
}
function animation(currentkey)
{
   var active= document.querySelector("."+currentkey);
   active.classList.add("pressed");
   setTimeout(function(){
     active.classList.remove("pressed");
   },100);
}
