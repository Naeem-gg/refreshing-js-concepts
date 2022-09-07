function add(n1,n2) 
{
    return n1+n2;
}

function sub(n1,n2)
{
    return n1 - n2;
}

function multiply(n1,n2) 
{
    return n1 * n2;
}

function divide(n1,n2) 
{
    return n1 / n2;
}

function calculate(n1,n2,operation) 
{
    return operation(n1,n2);
    
}

console.log(calculate(10,20,divide))