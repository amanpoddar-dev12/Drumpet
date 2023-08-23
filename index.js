let count = document.querySelectorAll(".drum").length;

for (let i = 0; i < count; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clickbutton);

};

document.addEventListener('keypress',function(event){
    makesound(event.key)
    buttonAnimation(event.key)
})

function clickbutton(elm) {
  var elm = this.innerHTML;
  console.log(elm);
  makesound(elm)
  buttonAnimation(elm)
  }

function makesound(elm){
  switch (elm) {
    case "a": {
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
    }

    case "w": {
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
    }
    case "s": {
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
    }
    case "d": {
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
    }
    case "j": {
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
    }
    case "k": {
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
    }
    case "l": {
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
    }
}
}

function buttonAnimation(eventkey){
    var activebutton=document.querySelector("."+eventkey);
    activebutton.classList.add("pressed");
    setTimeout(() => {
      activebutton.classList.remove("pressed")
    }, 100);

}