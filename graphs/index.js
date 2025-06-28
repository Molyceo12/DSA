

class Graph
{
    constructor()
    {
        this.adjacencyList={}; 
    }
    addvertex(vtx)
    {
     if(!this.adjacencyList[vtx])
     {
        this.adjacencyList[vtx]=[];
        return true
     }
     return false
    }
    addEdge(vtx1,vtx2)
    {
        if(!this.adjacencyList[vtx1] || !this.adjacencyList[vtx2])
        {
            return false
        }
        

        this.adjacencyList[vtx1].push(vtx2);
        this.adjacencyList[vtx2].push(vtx1);
        return true;
    }
    removeEdge(vtx1,vtx2)
    {
        if(!this.adjacencyList[vtx1] || !this.adjacencyList[vtx2])
        {
            return false
        }
       
        this.adjacencyList[vtx1]=this.adjacencyList[vtx1].filter(v=>v!==vtx2);
        this.adjacencyList[vtx2]=this.adjacencyList[vtx2].filter(s=>s!==vtx1);

        return true
    }
    removeVertex(vtx)
     {

          if (!this.adjacencyList[vtx]) {
              return undefined;
          }
      
          
          for(let neighbour of this.adjacencyList[vtx])
      
          {
              this.adjacencyList[neighbour]=this.adjacencyList[neighbour].filter(n=>n!==vtx)
          }
      
          delete this.adjacencyList[vtx];

    return this;
    }
   bfs(start)
   {
       if(!this.adjacencyList[start])
       {
        return [];
       }

       var queue=[start]
       var result=[];
       var visted={};


       visted[start]=true


      while(queue.length>0)
      {
        var vertex=queue.shift();
         result.push(vertex);

         for(let neighbour of this.adjacencyList[vertex])
         {
            if(!visted[neighbour])
            {
                visted[neighbour]=true
                queue.push(neighbour);
            }
         }
        
      }
      return result;
   }

    bfsrecursive(start)
    {
        var visted={}
        visted[start]=true;
        var result=[];
        var queue=[start];

        

       var bfshelper=(queue)=>
        {
             if(queue.length===0)
             {
                return 
             }

             var vertex=queue.shift();
             result.push(vertex);
             

             for(let neighbour of this.adjacencyList[vertex])
             {
                 if(!visted[neighbour])
                 {
                     visted[neighbour]=true
                     queue.push(neighbour);
                     bfshelper(queue);
                 }
             }

            
        }
        bfshelper(queue);


        return result;
    }
    dfs(start)
    {
       if(!this.adjacencyList[start])
       {
         return [];
       }


       var stock=[start];
       var visited={};
       var result=[];


       while(stock.length>0)
       {
         var vertex=stock.pop();
         if(!visited[vertex])
         {
            visited[vertex]=true;
            result.push(vertex);
         }

         for(let neighbour of this.adjacencyList[vertex])
         {
            if(!visited[neighbour])
            {
                stock.push(neighbour);
            }
         }
       }
       return  result
    }

}


var  mauriceGraph = new Graph();
mauriceGraph.addvertex('A');
mauriceGraph.addvertex('B');
mauriceGraph.addvertex('C');
mauriceGraph.addvertex('D');
mauriceGraph.addvertex('E');
mauriceGraph.addvertex('F');

mauriceGraph.addEdge('A','B');
mauriceGraph.addEdge('A','E');
mauriceGraph.addEdge('A','D');

mauriceGraph.addEdge('D','F');
mauriceGraph.addEdge('D','C');
mauriceGraph.addEdge('E','F');
mauriceGraph.addEdge('E','B');
mauriceGraph.addEdge('C','F');
mauriceGraph.addEdge('C','B');

// mauriceGraph.removeEdge('A','B');
console.log("graph",mauriceGraph);
console.log("graph bfs",mauriceGraph.bfs('A'));
console.log("graph dfs",mauriceGraph.dfs('A'));
