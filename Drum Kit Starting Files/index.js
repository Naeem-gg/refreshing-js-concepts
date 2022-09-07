for (let index = 0; index < 7; index++) 
{
 
    document.querySelectorAll("button")[index].addEventListener("click",function(){
        this.style.color = "white";
        let audio = new Audio("sounds/crash.mp3");
        console.log(`I got clicked man ${index}`);
        audio.play();
    });
    
}

// function clicked() {
//     console.log("I got clicked man");
    
// }