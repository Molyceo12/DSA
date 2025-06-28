var factorial=(n)=>{
    if(n<0 || n===0)
    {
        return 1
    }
    else 
    {
       return n*factorial(n-1)
    }
    
}
const result=factorial(4)
console.log("factorial",result);