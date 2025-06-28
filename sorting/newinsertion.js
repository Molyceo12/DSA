var insertion=(array)=>{

    for(let i=1;i<array.length;i++)
    {
      let j=i-1
      let current=array[i];

      while(j>=0 && current<array[j])
      {
          array[j+1]=array[j];
          j--
      }

      array[j+1]=current;
    }
  return array; 
}
const numbers=[3,1,5,4,0,5,12,13]
console.log("sorted array",insertion(numbers));
