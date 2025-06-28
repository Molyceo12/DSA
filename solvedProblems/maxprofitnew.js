var maxProfit=(prices)=>{

    var minimun=prices[0];
    var maxProfitL=0;
    var left=[];
    
    for(let i=0;i<prices.length;i++)
    {
        var profit=0;

        if(prices[i]<minimun)
        {
            minimun=prices[i]
        }

        var profit=prices[i]-minimun
        if(profit>maxProfitL)
        {
            maxProfitL=profit;
        }

        left.push(maxProfitL)
    }

    
    var lastItemIndex=prices.length-1;
    var maximum=prices[lastItemIndex];
    var maxProfitR=0;
    console.log("first max profitright",lastItemIndex);
    var right=[];


    for(let j=prices.length-1;j>=0;j--)
    {  
        
        if(prices[j]>maximum)
        {
            maximum=prices[j];
        }

        var profit=maximum-prices[j]

        if(profit>maxProfitR)
        {
            maxProfitR=profit
        }
        console.log("maximum",maximum);

        right.push(maxProfitR)
    }

    
    right.reverse();
    var total=[];
    console.log(left);
   
    
    for(let i=0;i<right.length;i++)
    {
        total[i]=right[i]+left[i];
    }

    return   Math.max(...total);

}

var prices=[3,3,5,0,0,3,1,4]

console.log("maxprofit",maxProfit(prices));