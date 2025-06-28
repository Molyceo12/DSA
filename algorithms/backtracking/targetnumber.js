var permutation=(nums,target)=>{

   var result=[];
   
   bct([]);

   function bct(path)
   {
      var sum=path.reduce((a,b)=>a+b,0);
      if(sum===target)
     {
       result.push([...path])
       
     }
     for(let i=0;i<nums.length;i++)
     {
         
            path.push(nums[i]);

            
         bct(path);
         path.pop();
         
         }
        
     
   }
  return result;
}

console.log("permutations",permutation([1,2,3]));