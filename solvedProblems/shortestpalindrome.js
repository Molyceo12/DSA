var shortPalindrome=(s)=>{

var j=s.length-1;


while(j>0)
{
  

    if(checkIfPalindrome(s.slice(0,j+1)))
    {
        var rest=s.slice(j+1,s.length);
        return rest.split('').reverse().join('').concat(s);       
    }
    j--;
  
}

var newprefix=s.split('')
newprefix.shift();
newprefix=newprefix.reverse().join('');


return newprefix.concat(s);     //abcd

}



 var checkIfPalindrome=(string)=>
{
  return string.split('').reverse().join('')===string
}

console.log("check palindrome",shortPalindrome("kdhasaj"));  
    