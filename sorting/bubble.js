var bubblesort=(array)=>{
    var  arr=array;
    for(let i=0;i<arr.length;i++)
    {
        

        for(let j=0;j<arr.length;j++)
        {
            
            if(arr[j]>arr[j+1])
            {
                
                const temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
               
            
        }
    }

    return arr;
}

console.log("bubble sort :",bubblesort([2,8,4,3,23,9,3,6]));