const lists = ["naeem","faisal", "muzammil", "shoaib sir", "intekhab"];

function whosPaying()
{
    numberOfPersons = lists.length;
    let payee = Math.floor(Math.random() * numberOfPersons);
    return lists[payee]
}

console.log(`${whosPaying()} is going to pay today!`);