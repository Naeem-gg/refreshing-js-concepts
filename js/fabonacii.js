let output = [];

function fabonacii(n)
{
    if(n === 1)
        {
            output = [0];
        }
        else if(n === 2)
        {
            output = [0, 1];

        }
        else
        {
            output = [0,1];
            // output.push(output[0]+output[1]);
            
            for (let i = 2; i < n; i++)
            {

                output.push(output[output.length-2] + output[output.length-1]);
                console.log(output);
            }
            
            
        }
        // return output;
        // series.push(i);
        // console.log(series);
    
}
fabonacii(50);