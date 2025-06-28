var reverseString=(string)=>{
    var stack=[];
    var reversed=[];

    for(var char of string)
    {
        stack.push(char);
    }
    const length=stack.length;
    for(var i=0;i<length;i++)
    {
        var top=stack.pop();
        reversed.push(top);
    }
    return reversed.join('');
}

console.log("reversed string",reverseString("amiel"));