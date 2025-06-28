var removeDuplicates=(Array)=>{
    var newset=new Set();
    var result=[];
    for(let num of Array)
    {
        if(!newset.has(num))
        {
          newset.add(num);
          result.push(num)
        }
    }
    return result;
}
console.log("answer",removeDuplicates([1,22,4,3,22,4,5,3,22]));