
var Jump=(array)=>{
   var length=array.length;
   var stage=0;

   for(let i=0;i<length;i++)
   {
     if(stage<i)
     {
        return false
     }
     var newLength=i+array[i];
     stage=Math.max(stage,newLength); 

     if(stage>=length)
     {
        return true
     }
   }
}
var nums = [2, 3, 1, 1, 4]
console.log("return type",Jump(nums));