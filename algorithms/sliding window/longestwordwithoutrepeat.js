var longestString=(string)=>{
    var left=0;
    var right=0;
    var maxlength=0;
    var newSet=new Set();
    
    while(right<string.length)
    {
        if(!newSet.has(string[right]))
        {
            newSet.add(string[right]);
            
            maxlength=Math.max(maxlength,newSet.size)
            right++;
        }
        else
        {
            newSet.delete(string[left])
            left++;
        }
    }
    return maxlength;
}
console.log("answer",longestString('abbacdef'));