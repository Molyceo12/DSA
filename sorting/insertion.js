var insertion=(array)=>{
   for(let i=1;i<array.length;i++)
   {
   
    let current=array[i];
    j=i-1


    while(j>=0 && current<array[j])
    {
        array[j+1]=array[j];
        j--;
    }
    array[j+1]=current;
}
   return array;
}

const array=[
   2, 8, 4, 3,
  23, 9, 3, 6
]

console.log("insertion",insertion(array));