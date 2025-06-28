const twonum=(array,target)=>{
    var pair=[]
    for(var i=0;i<array.length;i++)
    {
         for(let j=i+1;j<array.length;j++)
         {
            if(array[i]+array[j]===target)
            {
                pair.push([i,j]);
            }
         }
    }
    return pair
}


var numbers=[2,7,11,15]
console.log(twonum(numbers,9));