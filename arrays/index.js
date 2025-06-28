let stringArr=['a','B','c','d']
let numberArray=[1,2,3,5,7,8,9]
let boolArray=[true,false]
let mixed=['a',2,true,undefined,null,{a:'a'},['b']]

// console.log(mixed)

class Myarray{
    constructor(){
        this.length=0;
        this.data={}
    }
    push(item)
    {
        this.data[this.length]=item;
        this.length++
        return this.length ;
    }
    get(index)
    {
        
        return this.data[index]
    }
    pop()
    {
        const lastItem=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        console.log("________",lastItem);
        return lastItem
        
        
    }
    shift()
    {
         const firstEItem=this.data[0]

          for(let i=0;i<this.length-1;i++)
            {
                this.data[i]=this.data[i+1]
            } 
        delete  this.data[this.length-1];
        this.length--
        return firstEItem
        
    }
    deleteByIndex(index)
    {
        const item=this.data[index]

        for(let i=index;i<this.length-1;i++)
        {
            this.data[i]=this.data[i+1]
        }

        
        this.length--;
        delete this.data[this.length]

        return item

    }
}
  
const myNewArray=new Myarray();
myNewArray.push("apple");
myNewArray.push("mango");
myNewArray.push("kamonyi");
myNewArray.push("kigali");
myNewArray.push("nyarugenge");
myNewArray.push("kicukiro");
myNewArray.pop();

console.log(myNewArray);
console.log(myNewArray.shift());
console.log(myNewArray);
console.log(myNewArray.deleteByIndex(2));
console.log(myNewArray);


