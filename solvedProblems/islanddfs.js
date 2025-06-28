var countIsland=(grid)=>
{
  if(!grid || grid.length===0)
  {
    return 0
  }

  var rows=grid.length;
  var columns=grid[0].length;
  var islandCount=0;

  console.log("size",[rows,columns])

  for(let i=0;i<rows;i++)
  {
    console.log("row",i+1)
    for(let j=0;j<columns;j++)
    {
        console.log("value",grid[i][j]);
        if(grid[i][j]===1)
        {
         islandCount++ ;
         dfs(i,j) 
        }
    }
  }



  function dfs(i,j)
  {

    if(i<0 || j<0 || i>=rows || j>=columns || grid[i][j]===0)
    {
        return
    }

     grid[i][j]=0;

     dfs(i-1,j);
     dfs(i+1,j);
     dfs(i,j+1);
     dfs(i,j-1);
   }


  return islandCount
  
}

var grid=[[1,1,1,0,1],[1,1,0,1,0],[0,0,1,0,0]]
console.log("dsf method",countIsland(grid));


