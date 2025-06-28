var medianOfTwoArrays=(array1,array2)=>{
    var onearray=array1.concat(array2);
 console.log("onearray",onearray);
   
    const length=onearray.length;
    var sortedOneArray=[];


    for(let j=0;j<length;j++)
    {

    console.log("iteration",j);

    let min=onearray[0]
    let index=0;

    for(let i=0;i<onearray.length;i++)
    {
         console.log("iteration",i);
        if(onearray[i]<min)
        {
            min=onearray[i]
            index=i;
        }
        
    }

    sortedOneArray.push(min);
    console.log("pushed number",min)
    
     onearray=onearray.slice(0,index).concat(onearray.slice(index+1));
      console.log("onearray",onearray);
    }
     var median
    if(sortedOneArray.length%2===0)
    {
        median=(sortedOneArray[(sortedOneArray.length/2)-1]+sortedOneArray[(sortedOneArray.length/2)])/2;
    }
    else
    {
          median=sortedOneArray((sortedOneArray.length-1)/2);
    }

return median

}
var nums1=[1,4,2,7]
var nums2=[6,5,23,12]
console.log("sorted two",medianOfTwoArrays(nums1,nums2));