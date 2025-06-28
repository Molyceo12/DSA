class Node
{
   constructor(value)
   {
    this.value=value
    this.next=null
   }
}
class Stack
{
    constructor()
    {
        this.top=null
        this.length=0;
    }
   push(value)
   {
    var newNode = new Node(value)
    if(!this.top)
    {
    
    this.top=newNode;
    
    }else
    {   let current=this.top
        this.top=newNode
        newNode.next=current
    }
       this.length++
   } 
   printstack()
   {
     if(!this.top)
     {
        return undefined
     }
     else
     {
        var array=[]
        var current=this.top;
        while(current)
        {
            array.push(current.value)
            current=current.next
        }
       return  array
     }

   }
   pop()
   {
     if(!this.top)
     {
        return undefined
     }
     else
     {
        var current=this.top
        if(current.next)
        {
          var nextNode=current.next
          this.top=nextNode;

          
        }
        
     this.length--
     }
   }
   min()
   {
      var current=this.top;
      var minimum=current.value;

      while(current)
      {
       if(minimum>current.value)
       {
          minimum=current.value
       }
       current=current.next
      }

      return minimum;
   }
   



}





let mauriceStack=new Stack();
mauriceStack.push(4); 
mauriceStack.push(5);
mauriceStack.push(12);
console.log("my list",mauriceStack.printstack());
mauriceStack.pop();
console.log("after pop",mauriceStack.printstack());
console.log("minimum value in stack",mauriceStack.min());

