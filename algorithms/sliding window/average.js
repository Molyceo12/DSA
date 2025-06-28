var maxaverage=(array,k)=>{

    if(k>array.length-1)
    {
        return undefined 
    }


    let  Maverage=0;
    let index=k;
    let i=0
    while(index<=array.length)
    {
       let average=array.slice(i,index).reduce((a,b)=>a+b,0)/4;
       console.log("average calculated",average);
       Maverage=Math.max(Maverage,average);
       index++;
       i++;
    }

    return Maverage;
}
let nums = [1,12,-5,-6,50,3];
let k=4 ;
console.log("result",maxaverage(nums,k));

