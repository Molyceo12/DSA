var targetSum=(numbers,target)=>{

    var candidates=numbers.sort((a,b)=>a-b)
    var result=new Set();
    var stock=[];

    for(let num of candidates)
    {
        stock.push([num]);
    }

    while(stock.length)
    {
       var top=stock.pop();
       var topSum=top.reduce((a,b)=>a+b,0);

       if(topSum===target)
       {
          result.add(top.join(','));
       }

       for(let item of candidates)
       {
        var newTop=[...top,item]
        var newTopSum=newTop.reduce((a,b)=>a+b,0);
        if(newTopSum<=target)
        {
            stock.push(newTop.sort((a,b)=>a-b))
        }
       }

       var final=[];

       for(let item of result)
       {
        var string=item.split(',');
        var number=string.map(Number);
        final.push(number);
       }
       

    }
    

   return final
     
    

}

const numbers=[2,3,4,8,7];
console.log("numbers",targetSum(numbers,7));