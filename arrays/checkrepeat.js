const lengthOfLongestSubstring=(string)=>{
       var result=[];
       var initial=0;
        var min=0
        var max=0;

        if(string.length===1)
        {
            return 1;
        }
       
       for(var i=1;i<string.length;i++)
       {
        let isIn=false
        let point=0;
            
            for(var j=initial;j<i;j++)
            {
                if(string[i]===string[j])
                {
                    isIn=true
                    point=j
                }
            }
            if(!isIn)
            {
                max++
            }
            else
            {
                result.push(string.slice(min,max+1));
                min=point+1;
                max=i;
                initial=point+1;

            }
            if(i===string.length-1)
            {
               result.push(string.slice(min,max+1)); 
            }
       }

       var maxheight=0;
       var g=0;

    for(let k=0;k<result.length;k++)
    {
        if(result[k].length>maxheight)
        {
            maxheight=result[k].length
            g=k;
        }
    }
      console.log("term:",result[g]);

       return maxheight;
}
console.log(lengthOfLongestSubstring("dvdf"));  //longest string 