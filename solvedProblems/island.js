var countIsland=(array)=>{
    if(!array || array.length<1)
    {
        return 0;
    }

    var columns=array[0].length;
    var rows=array.length;
    var islandCount=0;

    console.log("columns and rows",[rows,columns]);


   
    for(let i=0;i<rows;i++)
    {
        console.log("row :",i);
        console.log("number of islands",islandCount);
        for(let j=0;j<columns;j++)
        {
            console.log(array[i][j]);
            
            if(array[i][j]==1)
            {
               islandCount++;  
               
               bfs(i,j,array);
            }
        }
    }
 return islandCount

}

var bfs=(i,j,grid)=>
{
    var queue=[[i,j]] 
    grid[i][j]=0;
 
    while(queue.length>0)
    {
       var current=queue.shift();
       var row=(current[0]);
       var column=(current[1]);

       if(grid[row-1] && grid[row-1][column])
       {
          grid[row-1][column]=0,
          queue.push([row-1,column])
       }
        if(grid[row+1] && grid[row+1][column])
       {
          grid[row+1][column]=0,
          queue.push([row+1,column])
       }
         if(grid[column+1] && grid[row][column+1])
       {
          grid[row][column+1]=0,
          queue.push([row,column+1])
       }
         if(grid[column-1] && grid[row][column-1])
       {
          grid[row][column-1]=0,
          queue.push([row,column-1])
       }

    }
         
}




const grid=[[1,0,0,1,0,1],[0,1,1,0,0,0],[0,1,1,0,0,1]];
console.log("number of islands",countIsland(grid));

