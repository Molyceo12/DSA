var gasStation=(gas,cost)=>{
    
    var start=0;
    var steps=0;
    var fullGas=gas.concat(gas);
    var fullCost=cost.concat(cost);
    var tankLevel=0;
  
    for(let i=0;i<fullGas.length;i++)
    {
        
        tankLevel=tankLevel+fullGas[i];
        if(fullCost[i]<=tankLevel)
        {
            steps++;
            tankLevel=tankLevel-fullCost[i];
            
        }
        else
        {
            steps=0;
            start=i+1;
            tankLevel=0;
        }
    }

    if(steps>=Array.length)
    {
        return start
    }

    return -1
}
console.log("tank answer",gasStation([1,2,3,4,5],[3,4,5,1,2]));