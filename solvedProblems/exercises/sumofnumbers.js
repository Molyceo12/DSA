var findDifference=(number1,number2)=>{
    var length1=number1.length;
    var length2=number2.length;
    
    var result=[];

    if(length1>length2)
    {
        result.push(number1.slice(0,length1-length2));
        number1=number1.slice(length1-length2);
    }
    else if(length1<length2)
    {
        result.push(number2.slice(0,length2-length1));
        number2=number2.slice(length2-length1);
    }


    for(let j=0;j<number2.length;j++)
    {
        result.push(parseInt(number1[j])+parseInt(number2[j]));
    }


    return result.join("");
}

console.log("answer",findDifference("99","99"));