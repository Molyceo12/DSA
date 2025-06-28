var checkIfIsValidPalindrome=(string)=>{
    var stack=[];

    var brackets={
        "(":")",
       "{":"}",
        "[":"]"
    }

    for (let char of string)
    {
        if(brackets[char])
        {
            stack.push(char)
        }
        else
        {
            var top=stack.pop();
            if(!top || brackets[char]!==char)
            {
                return false
            }
        }
    }
    if(stack.length>1)
    {
        return false
    }
    return true
}
console.log("result:",checkIfIsValidPalindrome("[()]"));