var sumUp=(arr,target)=>{
   var windowwidth=Infinity;
   var left=0;
   var right=0;

   while(right<arr.length)
   {
    var sum=arr.slice(left,right+1).reduce((a,b)=>a+b,0);
     if(sum<target)
     {
        right++

     }
     else
     {
        windowwidth=Math.min(windowwidth,arr.slice(left,right+1).length);
        if(left<=right)
        {
          left++;
        }
        else
        {
            right++
        }
       
     }

   }

   return  windowwidth;


}
console.log("answer",sumUp([1,2,2,1,2,0,3],7));