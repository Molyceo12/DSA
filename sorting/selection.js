var selection=(array)=>{
   for(let i=0;i<array.length;i++)
   {
    
    
    var minindex=i;
    for(let j=i+1;j<array.length;j++)
    {
        if(array[j]<array[minindex])
        {
          minimum=array[j];
          minindex=j; 
        }
    }

    var temp=array[i];
    array[i]=array[minindex];
    array[minindex]=temp;

    
   }

   return array
}

const array=[
   2, 8, 4, 3,
  23, 9, 3, 6
]

console.log("insertion",selection(array));