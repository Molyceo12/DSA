var permutation=(Array)=>
{
    var result=[];
    const stock=[];

    for(let num of Array)
    {
       stock.push([num]);
    }

   while(stock.length>0)
   {
       var top=stock.pop();
       if(top.length===Array.length)
       {
           result.push([...top])
       } 

       let index=Array.indexOf(top);
       let newArray=Array.slice(0,index)+Array.slice(index+1);
       

       for(let item of newArray)
       {
        
       
           stock.push([...top,item])
       
   }
}
 return result
    
}
console.log(permutation([1,2,3]));