
const chunk=(array,count)=>{
    var chunked=[]
    let index=0
    while(index<array.length)
    {
        const chunk=array.slice(index,index+count)
        chunked.push(chunk);
         index=index+count
        console.log(chunk)
    }
   

    return chunked
};

console.log(chunk([1,2,4,6,3,5,7,4,7,5,5,7],3));