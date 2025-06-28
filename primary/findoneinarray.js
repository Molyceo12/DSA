const studentsdatabase =['jordan','eric','boi','michel']

const findstudent=(allstudent,studentName)=>{
    for(let i=0;i<allstudent.length;i++)
    {
        if(allstudent[i]===studentName)
        {
            console.log(`found ${studentName}`)
            ;
        }
            
    }
}
findstudent(studentsdatabase,"eric");



const groceries=['milk','bread','eggs','flour','choose','sugar']


const searchForItem=(item)=>{
   let found=false
    for(i=0;i<groceries.length;i++)
    {
         if(groceries[i]===item)
         {
            
            found=true
         }     
    }

    for(j=0;j<groceries.length;j++)
    {
         if(groceries[j]===item)
         {
            
            found=true
         }     
    }
   console.log(`item ${item} ${found? "found" : "not found"}`)   

   // n+n = 2n = o(2n)
  // constant=o(1)
}



searchForItem("boie");