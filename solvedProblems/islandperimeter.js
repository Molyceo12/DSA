var perimeter=(grid)=>
{
    if(!grid || grid.length<1)
    {
        return 0
    }
      var rows=grid.length;
      var columns=grid[0].length;

      var maxPerimeter=0;



      for(let i=0;i<rows;i++)
      {
        for(let j=0;j<columns;j++)
        {
            

            if(grid[i][j]===1)
            {
                var  parameter=0
               dfs(i,j); 
                maxPerimeter=Math.max(parameter,maxPerimeter);  
            }
        }
      }

      function dfs(i,j)
      {
          if(i<0 || j<0 || j>=columns ||i>=rows|| grid[i][j]===0)
            {
                parameter++
                return
            } 


            if(grid[i][j]===-1)
            {
                return 
            }

           grid[i][j]=-1

           dfs(i,j+1)
           dfs(i,j-1);
           dfs(i+1,j);
           dfs(i-1,j);
      }

      return maxPerimeter
}

var grid=[[1,1,0,0,1,1],[0,0,1,0,1,1],[1,1,0,0,1,0],[1,0,0,0,1,0]];

console.log("answers",perimeter(grid));