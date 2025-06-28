let reverseString=(string)=>string.split("").reverse().join("");
console.log(reverseString("hello"));
console.log(reverseString("molyceo  webDev"));

 
let palindromecheck=(string)=>{
    
    return reverseString(string)===string
}


console.log(palindromecheck("12321"));

let reverseInt=n=>{
    const reversed=n.toString().split("").reverse().join("");
    return parseInt(reversed)*Math.sign(n) 
}

console.log(reverseInt(-123));
console.log(reverseInt(123));