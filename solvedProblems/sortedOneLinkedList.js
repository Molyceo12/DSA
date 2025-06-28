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