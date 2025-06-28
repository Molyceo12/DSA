var orderArray=(array)=>{
    var result1=[];
    var result2=[];

    for(let i=0;i<array.length;i++)
    {
        if(i===0)
        {
    result1.push(array[i]);
        }

        if(i==1)
        {
            result2.push(array[i]);
        }
        else
        {
            var result1new=result1.push(array[i]);

            var dest1=result1new.sort((a,b)=>a-b).indexOf(array[i]);
        }

        
    }
}