$(document).ready(function () {
    
    let userPattern = [];
    $(".btn").click(function(){
  let userChosenColor = $(this).attr('id');
  $(this).fadeIn(50).fadeOut(50).fadeIn(50);
  userPattern.push(userChosenColor);
  console.log(userPattern);
  playsound(userChosenColor);
  animatePress(userChosenColor);
});


function playsound(name) 
{ 
  let mysound = new Audio("sounds/"+name+".mp3");
  mysound.play(); 
}

function animatePress(currentColor)
{
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function(){
    $(`#${currentColor}`).removeClass("pressed")
    
  },100)
}
// console.log($("h1").text);
let buttonColours = ["red", "green", "yellow", "blue"];
let gamePattern = [];


function nextSequence() {
  let number = Math.floor(Math.random() * 4);
  let randomColor = buttonColours[number];
  gamePattern.push(randomColor);

  $("#" + randomColor)
    .fadeOut(50)
    .fadeIn(50);
  console.log(randomColor);

    playsound(randomColor);
  // let sound = new Audio(`sounds/${randomColor}.mp3`);
  // sound.play();
}
//  nextSequence();
document.getElementById("level-title").addEventListener("click",nextSequence);

});