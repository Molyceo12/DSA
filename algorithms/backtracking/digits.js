var digitsCombinatorics=(digits)=>{
    var grid=[[],
       ["a","b","c"],
       ["d","e","f"],
       ["g","h","i"],
       ["j","k","l"],
       ["m","n","o"],
       ["p","q","r","s"],
       ["t","u","v"],
       ["w","x","y","z"],
       []];

       var result =[];
       var stock=[];

       
       var firstDigits=grid[digits[0]]
       var secondDigits=grid[digits[1]]

       if(!secondDigits)
       {
         for(let item of firstDigits)
         {
            result.push(item);
         }
         return result
       }

       for(let item of firstDigits)
       {
        stock.push(item);
       }
       
        while(stock.length)
        {
            var top=stock.pop();
            if(top.length===2)
                {
                 result.push(top)
                 
                }  
            else
            {
                
            
                
            for(let item of secondDigits)
            {
                stock.push(top.concat(item));
            }
        }
        }

       

       

       return result;
}

console.log("digits",digitsCombinatorics("24"));