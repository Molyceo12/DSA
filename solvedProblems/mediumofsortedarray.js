
const median=(left,right)=>{
   const result=[];
   var i=0;
   var j=0;

      while(i<left.length && j<right.length)
      {
   
      
      if(left[i]<right[j])
      {
       result.push(left[i])
       i++;
   
      }
      else
      {
       result.push(right[j]);
       j++;
      }
     }

     result.push(...left.slice(i));
     result.push(...right.slice(j));

     
    var medium=Math.floor(result.length/2);

    return result[medium];

      
   
}

var left=[1,4,6,8];
var right=[3,5,7,9,20];

console.log("medium",median(left,right));