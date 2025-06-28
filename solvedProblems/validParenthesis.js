var parenthesis=(string)=>{
    var  brackets={
        "[":"]",
        "{":"}",
        "(":")",
    }

    var stock=[];


   for(let item of string)
   {
    if(brackets[item])
    {
      
       
        stock.push(brackets[item])

     
    }
    else
    {
        if (stock.length===0)
        {
            return false
        }
        var top=stock.pop();

        if(top!==item)
        {
            return false
        }
    }
   }

   if(stock.length===0)
   {
      return true
   }
   else
   {
    return false
   }

}
var string=("{{[(){}]}");

console.log("verification",parenthesis(string));
