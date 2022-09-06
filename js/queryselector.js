function mousein() {
    document.querySelector(".my").innerHTML = "Naeem";
    document.querySelector("ul li a").style.color = "red";    
    document.querySelector("button").style.backgroundColor = "yellow";
    document.querySelector("button").style.fontSize = "100px";

}
function mouseout() 
{
    document.querySelector(".my").innerHTML = "something 3";    
    document.querySelector("ul li a").style.color = "black";    
    document.querySelector("button").style.backgroundColor = "red";
    document.querySelector("button").style.fontSize = "50px";


}
