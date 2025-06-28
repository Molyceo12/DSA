var twosum=(nums,target)=>
{
    var numMap={}


    for(let i=0;i<nums.length;i++)
    {
        var compliment=target-nums[i];


        if(compliment in numMap)
        {
            return [numMap[compliment],i]
        }
        else
        {
            numMap[nums[i]]=i;
        }
    }
  return []
}

var nums=[2,7,11,15];
var target=9;
const result=twosum(nums,target);
console.log("result",result);