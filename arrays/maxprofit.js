
var findMaximumProfit=(array)=>
{
    var maxProfit=0;
    var minPrice=Infinity;

    for(let i=1;i<array.length;i++)
    {
        let currentPrice=array[i];
        minPrice=Math.min(minPrice,currentPrice)
        let profit=currentPrice-minPrice;
        maxProfit=Math.max(profit,maxProfit)
    }

    return maxProfit
}

 const prices=[7,1,5,3,6,4]
 const profit=findMaximumProfit(prices)
 console.log("profit",profit);