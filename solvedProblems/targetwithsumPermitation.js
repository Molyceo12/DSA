var targetSum=(numbers,target)=>{
    numbers.sort((a,b)=>a-b);
      var result=new Set();

      var stock=[];

      

      for(let num of numbers)
      {
        stock.push([num]);
      }

      console.log("stock",stock);

      while(stock.length)
      {
        var top=stock.pop();
        var topSum=top.reduce((a,b)=>a+b,0)

        if(topSum===target)
        {
            result.add(top.join(','));
        }
       
        for(let item of numbers)
        { 
            var newtop=[...top,item];
            var newTopSum=newtop.reduce((a,b)=>a+b,0)

            if(newTopSum<=target)
            {
                stock.push([...top,item].sort((a,b)=>a-b));
            }
           
        }
  
      }

      var final=[];

      for(let item of result)
      {
        var string=item.split(',');
        var number=string.map(Number);
        final.push(number);
      }

     return  final;
      
}

var numbers=[4,2,3,7]
console.log("all subsets",targetSum(numbers,7));