


var chunkArray=(array,count)=>{
    var chunkedarray=[]

    for(var i=0;i<array.length;i=i+count)
    {
      var newarray=[]
      for(var j=i;j<i+count;j++)
      {
        if(array[j])
        {
          newarray.push(array[j])
        }
        
      }
      chunkedarray.push(newarray);
    }
    return chunkedarray


}

const numbers=[3,4,5,3,2,4,5,6,4,2]
console.log("chunked array:",chunkArray(numbers,3));