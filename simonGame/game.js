$(document).ready(function () {
    let Level =  0;   
    let userPattern = [];
    $(".btn").click(function(){
  let userChosenColor = $(this).attr('id');
  $(this).fadeIn(50).fadeOut(50).fadeIn(50);
  userPattern.push(userChosenColor);
  console.log("userPattern "+Array(userPattern));
  playsound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userPattern.length-1);
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

function startOver() {
userPattern = [];
gamePattern = [];
Level = 0;
}

function checkAnswer(CurrentLevel)
{
    if(userPattern[CurrentLevel]===gamePattern[CurrentLevel])
    {
      console.log("success");
      if(userPattern.length===gamePattern.length)
      {
        setTimeout(nextSequence,1000);
      }
    }
    else
    {
      console.log("wrong");
      let wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
        },200);
        $("h1").text("Press A key to start");
        startOver();
      // setTimeout($("body").removeClass("game-over"),200);
    }

}
function nextSequence() {
  userPattern = [];
  $("h1").text(`Level ${Level}`);
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
  Level++;
  console.log("gamePattern "+gamePattern);
  // checkAnswer(Level);
}
//  nextSequence();
// document.getElementById("level-title").addEventListener("click",nextSequence);

  document.addEventListener("keypress",nextSequence)


});