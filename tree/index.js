class Node{

    constructor(value)
    {
      this.value=value;
      this.left=null;
      this.right=null
    }
}


class BST{

    constructor()
    {
        this.root=null
        
    }
    insert(value)
    {
        var newNode =new Node(value)

        if(!this.root)
        {
            this.root=newNode;

        }
        else
        {
             var current=this.root

             while(current)
             {

                
                if(value>current.value)
                {
                    if(current.right)
                    {
                        current=current.right;
                    }
                    else
                    {
                        current.right=newNode
                        return this;
                    }
                }
                else if(value<current.value)
                {
                    if(current.left)
                    {
                       current=current.left
                    }
                    else
                    {
                        current.left=newNode;
                        return this
                    }
                }
                else
                {
                    return this
                }
                

                
             }
        }

        return this
    }
    search(value)
    {
        var current=this.root;

        if(!this.root)
        {
            return false
        }
        


        while(current)
        {
            if(current.value===value)
            { 
                return true
            }
            else if(current.value<value)
            {
                
                     current=current.right
            }   
            else 
            {
                   current=current.left;
            }
                   
                 
        }
    }
    bfs()
    {
        var queue=[];
        var value=[];

        var current=this.root;
        queue.push(current)
        value.push(current.value);

        while(true)
        {
            
            
            var fistQueue=queue.shift();
        
            if(!fistQueue)
            {
                break;
            }
            

            if(fistQueue.left)
            {
                queue.push(fistQueue.left)
                value.push(fistQueue.left.value)
            }
            if(fistQueue.right)
            {
                queue.push(fistQueue.right);
                value.push(fistQueue.right.value);
            }
    
        }
        return value

        
    }
    dfsPreOrder(node=this.root,data=[])
    {
        if(!node)
        {
            return data
        }

        data.push(node.value)


        if(node.left)
        {
            this.dfsPreOrder(node.left,data);
        }
        if(node.right)
        {
            this.dfsPreOrder(node.right,data); 
        }

        return data
    }
     dfsPostOrder(node=this.root,data=[])
    {
        if(!node)
        {
            return data
        }

        


        if(node.left)
        {
            this.dfsPostOrder(node.left,data);
        }
        if(node.right)
        {
            this.dfsPostOrder(node.right,data); 
        }

        data.push(node.value)

        return data
    }

    dfsInOrder(node=this.root,data=[])
    {
       if(!node)
       {
         return data
       }


       if(node.left)
       {
        this.dfsInOrder(node.left,data)
       }

       data.push(node.value);

       if(node.right)
       {
         this.dfsInOrder(node.right,data);
       }
        

        return data
    }
      

    }




var mauricetree=new BST()
mauricetree.insert(5); 
mauricetree.insert(8);
mauricetree.insert(3);
mauricetree.insert(1);
mauricetree.insert(7);
mauricetree.insert(9);

// mauricetree.insert(17);
console.log("maurice tree",mauricetree)
console.log("searching for ",mauricetree.search(14));
console.log("bfs",mauricetree.bfs());
console.log("pre order",mauricetree.dfsPreOrder());
console.log("dfs post order",mauricetree.dfsPostOrder());
console.log("dfs in order",mauricetree.dfsInOrder());