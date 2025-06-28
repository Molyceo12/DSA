var permutation=(nums)=>{

   var result=[];
   var used=new Array(nums.length).fill(false)
   bct([]);

   function bct(path)
   {
     
      if(path.length===nums.length)
     {
       result.push([...path])
       
     }
     for(let i=0;i<nums.length;i++)
     {
         if(!used[i])
         {

            path.push(nums[i]);

            used[i]=true;
         bct(path);
         path.pop();
         used[i]=false;
         }
        
     }
   }
  return result;
}

console.log("permutations",permutation([1,2,3]));