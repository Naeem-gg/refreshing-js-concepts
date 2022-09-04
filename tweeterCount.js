const run = ()=>{
    let text = document.getElementById("text").value;
    // alert(text);
    const limi = 140;
    if(text.length>limi)
    {
        console.log(text.length);
        console.log(`limit exceeded by ${text.length-limi}`);
        const tweet = text.slice(0,141);
        console.log(tweet);
    }
    else
    {
        console.log(`great your tweet is of ${text.length}\n${text}`);
    }

}
    