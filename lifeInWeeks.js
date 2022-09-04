/*Example Input

e.g. If you are 56 years old:

lifeInWeeks(56)
Example Output

You have 12410 days, 1768 weeks, and 408 months left.*/

function lifeInWeeks()
{
    age = 56;
    remainingAge = 90-age
    console.log(`you have ${remainingAge*365} days, ${remainingAge*52} weeks, and ${remainingAge*12} months left.`)

}

lifeInWeeks();