// let houseKeeper = {
//     name:"jane",
//     age:30,
//     salary:3000,
//     workExperience:"2 yrs",
//     workWith: ["java", "mava","excel","SQL"]
// }
// console.log(houseKeeper.name);
// console.table(houseKeeper);


function HouseKeeper(name,age,salary,workExperience,workWith) 
{
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.workExperience = workExperience;
    this.workWith = workWith;     
}

let houseKeeper1 = new HouseKeeper("john snow",25,2500,"5 yrs",["tata hotel","james palace","joker santa","jona parlors"]);
let houseKeeper2 = new HouseKeeper("nana patikar",66,3000,"25 yrs",["may","juje","jaja"]);
console.log(houseKeeper1,houseKeeper2);