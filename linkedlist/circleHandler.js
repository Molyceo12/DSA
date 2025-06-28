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
        var newNode=new Node(value)
        if(!this.head)
        {
                this.head=newNode;
                this.tail=newNode;
        }
        else
        {
            const current=this.tail
            current.next=newNode
            this.tail=newNode
            newNode.next=null
        }
        this.length++
    }
    printList()
    {
        var current=this.head
        var result=[];
        
        
        while(current)
        {
             result.push(current.value);
             current=current.next;
            
        }
        return result
    }
    createCircle(spot)
    {
        let i=spot;
        if(this.head)
        {
        var current=this.head
            
        var index=0
        while(index<i)
        {
            current=current.next
            index++;
        }

        console.log("current",current)

        
         this.tail.next=current
         }
    }
    checkifcircle()
    {
        var last=this.tail
        if(last.next)
        {
             return true
        }
        else
        {
            return false
        }
    }
    

}
var mauriceList=new LinkedList();
mauriceList.push(12);
mauriceList.push(13);
mauriceList.push(17);


console.log("list now for print",mauriceList.printList());
// mauriceList.createCircle(1);
console.log("after creating  a circle",mauriceList.printList());
console.log(mauriceList)

console.log("checking if there is a circle ",mauriceList.checkifcircle())
