/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

var left=[]
var minL=prices[0];
var profitL=0;
var maxProfitL=0

for(let i=0;i<prices.length;i++)
{
    if(minL>prices[i])
    {
        minL=prices[i];
    }
    
    profitL=prices[i]-minL

    if(profitL>maxProfitL)
    {
       maxProfitL=profitL;
    }

    left.push(maxProfitL);
}

var right=[]
var maxR=prices[prices.length-1];
var profitR=0;
var maxProfitR=0

for(let j=prices.length-1;j>=0;j--)
{
    if(maxR<prices[j])
    {
        maxR=prices[j];
    }
    
    profitR=maxR-prices[j]

    if(profitR>maxProfitR)
    {
       maxProfitR=profitR;
    }

    right.push(maxProfitR);
}
var total=[];
right.reverse();

for(let i=0;i<prices.length;i++)
{
    total[i]=left[i]+right[i];
}

let maxProfitAll=Math.max(...total);


return maxProfitAll   

    
}


    



   