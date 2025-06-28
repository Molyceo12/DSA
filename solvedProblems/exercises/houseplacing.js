var houseplacing=(queries)=>{
    var result=[1];
    var newhouseorder=[];
    newhouseorder.push(queries[1]);
    

    for(i=1;i<result.length;i++)
    {
         newhouseorder.push(queries[i]);
         newhouseorder.sort((a,b)=>a-b);
         for(let j=0;j<newhouseorder.length;j++)
            {
                if(newhouseorder[j]=newhouseorder[j+1])
                {
                    
                }
            } 
    }
}