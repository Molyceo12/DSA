class Node
{
    constructor(value)
    {
      this.value=value
      this.next=null
    } 
}
class LinkedList
{
    constructor()
    {
       this.head=null;
       this.tail=null;
       this.length=0;
    }
    push(value)
    {
        var newNode =new Node(value)
        if(!this.head)
        {
            this.head=newNode
            this.tail=newNode
        }
        else
        {
            this.tail.next=newNode;
            this.tail=newNode
        }
       this.length++
    }

    printList()
    {
        var current=this.head;
        var result=[];
        while(current)
        {
            result.push(current.value)
            current=current.next
        }
        return result
    }
    pop()
    {
       if(!this.head)
       {
         return undefined
       }
       else
       {
         var current=this.head
         var latestNode=current

         while(current.next)
         {
            latestNode=current;
            current=current.next
         }

         this.tail=latestNode
         this.tail.next=null
         this.length--;

         if(this.length===0)
         {
            this.head=null
            this.tail=null
         }
       }
       return this
    }
    unshift(value)
    {
        var newnode=new Node(value)
        if(!this.head)
        {
            this.head=newnode
            this.tail=newnode
        }
        else
        {
            let current=this.head;
            this.head=newnode
            this.head.next=current
        }
        this.length++
        return   this
    }
    shift()
    {
        if(!this.head)
        {
            this.pop();
        }
        else
        {
            var current=this.head.next
            this.head=current;

        }
        this.length--
        return this
    }
    getFirst()
    {   if(this.head)
         {var current =this.head
         return current.value;}
    }
    getlast()
    {
        var current=this.tail
        return current.value
    }
    getByIndex(value)
    {
        let index=0
        let current=this.head
        while(index<value)
        {
            if(current)
            {
              current=current.next
              index++
            }
            else
            {
                return undefined
            }
            
        }
        return current.value
    }
    set(index,value)
    {
       
       var initialIndex=0;
       var current=this.head
       while(initialIndex<index)
       {
        if(current)
        {
           current=current.next
           initialIndex++
        }
        else
        {
            undefined
        }
       }
      current.value=value
      return this
      
    }
    insert(index,value)
    {
         let newNode=new Node(value)
         var current=this.head
         let initialindex=0
         let  prev=null

         while(initialindex<index)
         {
            if(current)
            {
                prev=current
               current=current.next
               initialindex++
            }
            else
            {
                return undefined
            }
           
         }
         prev.next=newNode
         newNode.next=current
         this.length++
     return this

    }
    getSize()
    {
        let count=0
        if(this.head)
        {
           count=1
           var current=this.head
           while(current.next)
           {
              count++
              current=current.next
           }
        }
        else
        {
            return 0
        }
        
       return  count
    }
    deleteAll()
    {
        this.head=null
        this.tail=null
        this.length=0

        return this
    }
    reverse()
    {
      if(this.head)
      {
         var prev=null
         var current=this.head
         while(current)
         {
            var newNode=current.next
            current.next=prev
            prev=current
            current=newNode
         }

         this.tail=this.head;
         this.head=prev;
      }
      else
      {
        return undefined
      }
     

    }
}

var mauriceLinked=new LinkedList
mauriceLinked.push(16);
mauriceLinked.push(16);
mauriceLinked.push(19);
mauriceLinked.push(20);
mauriceLinked.pop();
mauriceLinked.pop();
mauriceLinked.unshift(20);
mauriceLinked.unshift(30);
mauriceLinked.shift();
mauriceLinked.set(1,300);
mauriceLinked.insert(1,50)


// console.log("my list",mauriceLinked.printList());

// mauriceLinked.reverse();
// console.log("reversed list",mauriceLinked.printList());


// console.log("getfirstnode",mauriceLinked.getFirst());
// console.log("getlastnode",mauriceLinked.getlast());
// console.log("get element by value ",mauriceLinked.getByIndex(1))
// console.log("get size of list",mauriceLinked.getSize());

var  firstLinkedList=new LinkedList();
firstLinkedList.push(4);
firstLinkedList.push(5);
firstLinkedList.push(7);
firstLinkedList.push(12);
console.log("first linked list",firstLinkedList.printList());

var  secondLinkedList=new LinkedList();
secondLinkedList.push(6);
secondLinkedList.push(2);
secondLinkedList.push(0);
secondLinkedList.push(5);
console.log("second linked list",secondLinkedList.printList());



var sortedList=(list1,list2)=>
{

    var newNode=new Node(0);
    var current=newNode

    while(list1 && list2)
        {
            if(list1.value<list2.value)
            {
                current.next=list1;
                
                list1=list1.next
            }
            else
            {
                current.next=list2;
                list2=list2.next;
            }

            current=current.next;

        } 

        if(list1)
        {
            current.next=list1;
        }

        if(list2)
        {
            current.next=list2;
        }

        return newNode.next

}

console.log("sorted two",sortedList(firstLinkedList.head,secondLinkedList.head));


var sort=(head)=>{
    var dummy=new Node(0);
   
    var current=dummy;

    
    
    while(head)
    {
    var minimum=head;
    var newhead=head.next
    while(newhead)
    {
       if(minimum.value>newhead.value)  
       {
         minimum=newhead
       }
       newhead=newhead.next;
    }
    current.next=minimum;
    current=current.next;
    head=head.next;
    }
  return dummy.next;

}

console.log("sorted one list",sort(secondLinkedList.head));