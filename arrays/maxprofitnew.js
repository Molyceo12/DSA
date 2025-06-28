
const findLargestProfit=(array)=>{
    let daysHighestProfit=[]
     

    for(var i=0;i<array.length;i++)
    {
        let maxdiff=0;
        let highestday=i;

        for(var j=i+1;j<array.length;j++)
        {
            var diff=array[j]-array[i];
            console.log("difference",diff);
            
            if(diff>maxdiff)
            {
                maxdiff=diff;
                highestday=j

            }
            console.log("maxdiff",maxdiff);
        }
    daysHighestProfit.push([i,highestday,maxdiff])

    }

    var maximumProfit=daysHighestProfit[0][2]
    // console.log(maximumProfit);
    var itsindex=0;

    for(var i=0;i<array.length;i++)
    {
        if(daysHighestProfit[i][2]>maximumProfit)
        {
            maximumProfit=daysHighestProfit[i][2]
            itsindex=i;
        }
    }

    return  daysHighestProfit[itsindex] ;
     
}

const numbers=[2,5,17,1,3,11,9]

console.log(findLargestProfit(numbers));