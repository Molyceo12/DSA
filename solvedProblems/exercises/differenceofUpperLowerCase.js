var difference=(string)=>{
    var lowerCount=0;
    var upperCount=0;

    for(let i of string)
    {
        if(i===i.toUpperCase())
        {
            upperCount++
        }
        else

        {
            lowerCount++
        }
    }

    return upperCount-lowerCount;
}

var string="CodeSignal";
console.log("answer",difference(string));