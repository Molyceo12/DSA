var numberDifference=(array,key)=>{

    var indexes={}
    var results=[]


    for(let i=0;i<array.length;i++)
    {
        var difference=key-array[i];
        

        if(!indexes[difference] && indexes[difference]!==0)
        {
            indexes[array[i]]=i;
        }
        else
        {
           results.push([i,indexes[difference]]);
        }
    }

    return results
}
const numbers=[1,2,5,8,12,8]
console.log("indexes ",numberDifference(numbers,6));

