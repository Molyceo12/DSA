class HashTable
{
    constructor(size=5)
    {
         this.keyMap=new Array(size);
    }
    _hashFunction(key)
    {
          let sum=0;
          var prime_Number=31

          for(let i=0;i<Math.min(key.length ,100);i++)
          {
             const charCode=key.charCodeAt(i)-96;
             sum=(sum*prime_Number*charCode)%this.keyMap.length
          }

          return sum;
    }
    set(key,value)
    {
       const index= this._hashFunction(key)
       console.log(index);
       if(!this.keyMap[index])
       {
        this.keyMap[index]=[];  
      }
      this.keyMap[index].push([key,value]);
      return this;
    }
    get(key)
    {
        const index=this._hashFunction(key)
        
             if (this.keyMap[index])
             {
                for(let i=0;i<this.keyMap[index].length;i++)
                {
                    if(this.keyMap[index][i][0]===key)
                    {
                        return this.keyMap[index][i][1]
                    }
                }
             }

        return undefined
        
    }
    getAllKeys()
    {
        var result=[];
        for(let i=0;i<this.keyMap.length;i++)
        {
            if(this.keyMap[i])
            {
                for(var j=0;j<this.keyMap[i].length;j++)
                {
                    result.push(this.keyMap[i][j][0]);
                }
            }
        }
        return result
    }
    getAllValues()
    {
        var result=[];
        for(let i=0;i<this.keyMap.length;i++)
        {
            if(this.keyMap[i])
            {
                for(var j=0;j<this.keyMap[i].length;j++)
                {
                    result.push(this.keyMap[i][j][1]);
                }
            }
        }
        return result 
    }
}
const phoneBook= new HashTable();
phoneBook.set('jhon','555-333-444');
phoneBook.set('alice','223-345-256');
phoneBook.set('maurice','234-345-355');
console.log(phoneBook);
console.log(phoneBook.get("jhon"));
console.log("printing all keys",phoneBook.getAllKeys());
console.log("printing all values",phoneBook.getAllValues());