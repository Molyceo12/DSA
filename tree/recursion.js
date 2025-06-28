var countDown=(number)=>{
    if(number===0)
    {
         console.log(number,"finished");
        
    }
    else
    {
        console.log(number);
        countDown(number-1);
    }

}
countDown(12);