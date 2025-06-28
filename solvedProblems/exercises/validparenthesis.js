var validParenthesis=(string)=>{
    var brackets={
        "{":"}",
        "[":"]",
        "(":")"
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
            var top =stock.pop();
            if(item!==top)
            {
                return false
            }
        }

       
    }

   if(stock.length===0)
        {
            return true;
        }  
}
var string=("{{[(){}]}");
console.log("verification",validParenthesis(string));
