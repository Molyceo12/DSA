var mergesortarray=(array)=>{
    if(array.length<=1)
    {
      return array
    }

     const middle=Math.floor(array.length/2)

     var left=array.slice(0,middle);
     var right=array.slice(middle);

     return merge(mergesortarray(left),mergesortarray(right))
}


var merge=(left,right)=>
{
  var result=[];
  let i=0;
  let j=0;
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

  return result;
}
var res=mergesortarray([3,27,38,43,9,10,17,82]);

console.log(res)