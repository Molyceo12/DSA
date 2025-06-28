var numbersDifferWithOneDigit=(array)=>
{
    let result=[];
    for(var i=0;i<array.length;i++)
    {
        var firstnumber=array[i].toString();
        console.log("___________")
        console.log("firstnumber :",firstnumber)

        for(let j=i+1;j<array.length;j++)
        {
            var secondnumber=array[j].toString()
            console.log("second number",secondnumber);

            if(firstnumber.length==1 && secondnumber.length==1)
            {
                result.push([array[i],array[j]]);

                console.log(`they are single digit pushed : ${array[i]} ,${array[j]}`)
                console.log("status:",result);
                continue
            }

            var kk ;
            var n;

            if(firstnumber.length<secondnumber.length)
            {
              kk=secondnumber.length-firstnumber.length
            
              n=secondnumber.length;
            }
            else
            {
              kk=firstnumber.length-secondnumber.length

              n=firstnumber.length
            }


             if(kk>1)
              {
                 console.log(`the numbers differs up to 2 digits skipped: ${array[i]},${array[j]}`)
                 console.log("status:",result);
                 continue
                 
              }
              else
              {
                 var diff=0

                 for(var p=0;p<n;p++)
                  {
                     if(firstnumber[p]!==secondnumber[p])
                     {
                        diff++
                     }
                  }

                  if(diff===1)
                  {
                    console.log(`they are differ by 1 digit pushed  ${array[i]}, ${array[j]}`)
                    result.push([array[i],array[j]]);
                    console.log("status:",result);
                  }
              }        
        }
    }
    return result
}
let numbers=[14,1,234,9,236,145]
var answer=numbersDifferWithOneDigit(numbers)
console.log("answer",answer);