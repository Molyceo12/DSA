
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