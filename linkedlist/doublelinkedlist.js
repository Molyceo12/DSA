class Node
{
    constructor(value)
    {
     this.value=value;
     this.next=null;
     this.prev=null
    }
}

class DoublyLinkedList
{
    constructor()
    {
        this.head=null
        this.tail=null
        this.length=0
    }
    push(value)
    {
      var newNode=new Node(value);
      if(!this.head)
      {
        this.head=newNode;
        this.tail=newNode
      }
      else
      {

        var current=this.tail
        this.tail.next=newNode
        newNode.prev=current
        newNode.next=null
        this.tail=newNode
      }
      this.length++

    }
    pop()
    {
        if(!this.head)
        {
            return undefined
        }
        else
        {
            let current=this.head
            let prev=null

            while(current.next)
            {
                prev=current
               current=current.next
               
            }

            this.tail=prev
            this.tail.next=null
            this.length--;
        }
        return this
    }
    printList()
    {
        var array=[];
        if(this.head)
        {
           var current=this.head;
           while(current)
           {
            
              array.push(current.value);
              current=current.next
           }
        }
        return array
    }
    unshift(value)
    {
        var newNode=new Node(value);
        if(!this.head)
        {
              this.head=newNode
              this.tail=newNode
        }
        else
        {
              var current=this.head
              this.head=newNode
              newNode.next=current
              current.prev=newNode
        }
        this.length++

        return this

    }
    shift()
    {
       if(!this.head)
       {
        return undefined
       }
       else
       {
         var newhead=this.head.next
         this.head=newhead;
         this.head.prev=null
       }
        this.length--;
       return this
    }
    reverse()
    {
       if(this.head)
       {
         var temp=null
         var current=this.head
         while(current)
         {
            temp=current.prev
            current.prev=current.next
            current.next=temp;

            current=current.prev
         }

         temp=this.head;
         this.head=this.tail;
         this.tail=temp;
       }
       else
       {
        return undefined
       }
    }

}

mauriceDoubleList=new DoublyLinkedList();
mauriceDoubleList.push(5);
mauriceDoubleList.push(12);
mauriceDoubleList.push(12);
mauriceDoubleList.push(20);
mauriceDoubleList.push(70);
mauriceDoubleList.push(40);

console.log("printedlist",mauriceDoubleList.printList())
mauriceDoubleList.pop()
console.log("poped list",mauriceDoubleList.printList());
mauriceDoubleList.unshift(100);
console.log("poped list",mauriceDoubleList.printList());
mauriceDoubleList.shift()
console.log("shifted  element",mauriceDoubleList.printList());
mauriceDoubleList.reverse();
console.log("reversed list",mauriceDoubleList.printList());
    