var removeDuplicates=(array)=>{
        var result=[];
    var all={};
    let i=0;
    while(i<array.length)
    {

       if(!all[array[i]])
        {
            all[array[i]]=1;
        } 
        
        all[array[i]]=array[i];
       i++;
      
       
    }

    for(let i in all)
    {
        result.push(all[i]);
    }

    return result;
}

console.log("answer",removeDuplicates([1,2,3,3,4,5]));