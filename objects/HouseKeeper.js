function HouseKeeper(name,age,salary,workExperience,workWith) 
{
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.workExperience = workExperience;
    this.workWith = workWith;     
    this.clean = function clean() {
        console.log("cleaning in progress");
        
    }
}

let houseKeeper1 = new HouseKeeper("john snow",25,2500,"5 yrs",["tata hotel","james palace","joker santa","jona parlors"]);
let houseKeeper2 = new HouseKeeper("nana patikar",66,3000,"25 yrs",["may","juje","jaja"]);
// console.log(houseKeeper1,houseKeeper2);

houseKeeper1.clean();