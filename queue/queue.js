
class Node
{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}

class Queue
{
    constructor()
    {
        this.first=null;
        this.last=null;
        this.length=0;
    }
    enqueque(value)
    {
        var newNode=new Node(value)
        if(!this.first)
        {
            this.first=newNode;
            this.last=newNode;
            
        }
        else
        {
            var current=this.first;
            this.first=newNode;
             newNode.next=current
        }
        this.length++;
    }
    printList()
    {
        var result=[];
        var current=this.first
        while(current)
        {
           result.push(current.value);
           current=current.next;
        }
       return result
        
    }
    dequeque()
    {
        var fast=this.first.next
        var slow=this.first

        while(fast&&fast.next)
        {
            fast=fast.next;
            slow=slow.next;
        }
        this.last=slow
        slow.next=null;
        this.length--
    }
}

var mauriceQueque=new Queue();
mauriceQueque.enqueque(12);
mauriceQueque.enqueque(13);
mauriceQueque.enqueque(18);
console.log("my queue",mauriceQueque.printList());
console.log("my queue structure",mauriceQueque);
mauriceQueque.dequeque();
console.log("after deleting one element",mauriceQueque.printList())
console.log("my queue structure",mauriceQueque);

