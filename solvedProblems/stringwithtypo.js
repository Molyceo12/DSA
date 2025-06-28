var removeTypo=(string,n)=>
{
    var length=string.length;
    var result=[];
    if(string.length===n)
    {
       result.push(string); 
    }
    else if(n>string.length)
    {
        return undefined
    }
    else
    {
      
      console.log("nn: ",length);
   

        for(let i=0;i<length;i++)
        {
            if(string[i]===string[i+n])
            {
                console.log(`found char: ${string[i]} is equalt to ${string[i+n]}`);
                var k=0
                for(let j=i+1;j<string.length;j++)
                {
                    if(string[i]===string[j])
                    {
                        k++
                    }
                    else
                    {
                        j=string.length
                    }
                }

                if(k>=n)
                {
                    result.push(string.slice(0,i+1)+string.slice(i+1+n))
                    i=i+k;
                }
            }
        }
                   
     }
     return [result,result.length];

    }

    var string="aaaabbbbbbcc"
    console.log(removeTypo(string,5));

