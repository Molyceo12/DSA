var maze=(grid)=>
{
  if(!grid.length)
  {
    return  false
  }

  var isMaze=false
  var rows=grid.length;
  var columns=grid[0].length;
  for(let i=0;i<rows;i++)
  {
    for(let j=0;j<columns;j++)
    {
        if(grid[i][j]==='S')
        {
           dfs(i,j);
        }
    }
  }


  function dfs(i,j)
  {
    if(i<0 || j<0 || j>=columns || i>=rows || grid[i][j]==='0')
    {
        return  
    }

    

    if(grid[i][j]==='E')
    {
        isMaze=true;
        return
    }

    grid[i][j]='0';

  
    dfs(i+1,j);
    dfs(i-1,j);
    dfs(i,j+1);
    dfs(i,j-1);
    
    

  }


  return isMaze;
}

const grid = [
  ['S','1','0','0','E'],
  ['0','0','1','0','1'],
  ['1','0','1','1','1'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0']
];


console.log("answer",maze(grid));