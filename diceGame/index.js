let randomNumber1 = Math.floor(Math.random()*7);
let randomNumber2 = Math.floor(Math.random()*7);
// console.log(randomNumber);
if(randomNumber1 !== 0 && randomNumber2 !== 0)
{
    document.querySelector("#p1img").setAttribute("src",`images/dice${randomNumber1}.png`);
    document.querySelector("#p2img").setAttribute("src",`images/dice${randomNumber2}.png`);
    if(randomNumber1>randomNumber2)
    {
        document.querySelector("#p1").textContent = "Won";
        document.querySelector("#p2").textContent = "Lost";
        document.querySelector("#p2").style.color = "red";      
    }
    else
    {
        document.querySelector("#p2").textContent = "Won";
        document.querySelector("#p1").textContent = "Lost";
        document.querySelector("#p1").style.color = "red";
    }
}
// console.log(randomNumber1,"\n",randomNumber2);