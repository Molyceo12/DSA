class HashTable
{

    
    constructor(size)
    {
        this.keyMap= new Array(size)
        
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
        var index=this._hashFunction(key)

        if(!this.keyMap[index])
        {
            this.keyMap[index]=[]
        }
        this.keyMap[index].push([key,value]);
    }
    printlist()
    {
        return this.keyMap
    }
    get(key)
    {
        let index=this._hashFunction(key);
        if(!this.keyMap[index])
        {
            return undefined
        }

        for(var i=0;i<this.keyMap[index].length;i++)
        {
            if(this.keyMap[index][i][0]===key)
            {
                return this.keyMap[index][i][1];
            }
        }

        return undefined
    }

}
var mauriceHashTable=new HashTable(5)
mauriceHashTable.set("maurice","123");
mauriceHashTable.set("kevine",345);

console.log(mauriceHashTable.printlist());
console.log("looking for kevine",mauriceHashTable.get("kevine"));