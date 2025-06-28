var houseRobber=(numbers)=>{


    var sum1=0;
    var sum2=0;


    for(let i=0;i<numbers.length;i=i+2)
    {
        sum1=sum1+numbers[i];
    }

    for(let j=1;j<numbers.length;j=j+2)
    {
        sum2=sum2+numbers[j];
    }


    if(sum1>sum2)
    {
        return sum1
    }

    return sum2;

}

console.log("houserobber",houseRobber([1,2,3,6,5,1]));