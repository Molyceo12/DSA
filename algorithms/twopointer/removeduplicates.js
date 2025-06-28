var removeDuplicates=(Array)=>{
    var result=[Array[0]];

    for(let i=0;i<Array.length-1;i++)
    {
       if(Array[i+1]!==Array[i])
       {
        result.push(Array[i+1])
       }
    }
    return result
}
console.log("sorted array",removeDuplicates([1,2,3,3,4,4,4,5,6,6,7]));