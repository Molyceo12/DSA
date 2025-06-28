// o(n)

const numbers=[1,3,5,6,3,6,7]

let findnumber=(array,index)=>array[index]

console.log(findnumber(numbers,3))



let findPairs=(array)=>{
    //0(n^2)
    for(let i=0;i<array.length;i++)
    {
        for(let j=1;j<array.length;j++)
        {
              console.log(`pairs {${array[i]},${array[j]}}`)
        }
    }

    // 0(n)

    for(let q=0;q<array.length;q++)
    {
        console.log("_______",q)
    }
}

findPairs(numbers);     // 0(n+n^2)  simply after removing dorminant term   remain 0(n^2)
//time complexity is equal to  0log2(n) // n is number of all inputs 