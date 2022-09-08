for (let index = 0; index < 7; index++) {
  document.querySelectorAll("button")[index].addEventListener("click", function () {
      let htmlContent = this.innerHTML;
      switch (htmlContent) {
        case "w":
          let k = new Audio("sounds/kick-bass.mp3");
          k.play();

          break;

        case "a":
          let a = new Audio("sounds/tom-1.mp3");
          a.play();
          break;

        case "s":
          let s = new Audio("sounds/tom-2.mp3");
          s.play();
          break;

        case "d":
          let d = new Audio("sounds/tom-3.mp3");
          d.play();
          break;
        case "j":
          let w = new Audio("sounds/crash.mp3");
          w.play();
          break;
        case "k":
          let j = new Audio("sounds/tom-4.mp3");
          j.play();
          break;
        case "l":
          let l = new Audio("sounds/snare.mp3");
          l.play();
          break;

        default:
          console.log("dekhke click kr be");
          break;
      }
    });
}
  // document.addEventListener("keydown",function(e){
    
  //   switch (e.key) {
  //     case "w":
  //       let w = new Audio("sounds/snare.mp3");
  //       w.play();
        
  //       break;
    
  //     default:
  //       console.log("booga booga boom boom")
  //       console.log(e.key)
  //       break;
  //   }
  // });
document.addEventListener("keypress", function (event) {
  switch (event.key) {
    case "w":
      let k = new Audio("sounds/kick-bass.mp3");
      k.play();

      break;

    case "a":
      let a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;

    case "s":
      let s = new Audio("sounds/tom-2.mp3");
      s.play();
      break;

    case "d":
      let d = new Audio("sounds/tom-3.mp3");
      d.play();
      break;
    case "j":
      let w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    case "k":
      let j = new Audio("sounds/tom-4.mp3");
      j.play();
      break;
    case "l":
      let l = new Audio("sounds/snare.mp3");
      l.play();
      break;

    default:
      console.log("dekhke type kr be"+event);
      break;
  }
});

// function clicked() {
//     console.log("I got clicked man");

// }
