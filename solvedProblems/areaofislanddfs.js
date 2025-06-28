var areaofisland=(grid)=>{
    if(!grid || grid.length<1)
    {
        return 0
    }

    var columns=grid[0].length;
    var rows=grid.length;
    let maxarea=0;

    for(let i=0;i<columns;i++)
    {
       if(grid[0][i]===1)
       {
         dfs(0,i)
       }  
       if(grid[rows-1,[i]]===1)
       {
        dfs(rows-1,i);
       }
    }

    for(let j=0;j<rows;j++)
    {
        if(grid[j][0]===1)
        {
            dfs(j,0);
        }
        if(grid[j][columns-1]===1)
        {
            dfs(j,columns-1);
        }
    }

   

    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            console.log(grid[i][j]);
            if(grid[i][j]===1)
            {
              var area=0;
              dfs(i,j);
              maxarea=Math.max(maxarea,area);
            }
        }
    }

    



    function dfs(i,j)
    {
      
       if(i<0||j<0||i>=rows||j>=columns||grid[i][j]===0)
       {
         return 0;
       }
       

       grid[i][j]=0;
       
       area++
       dfs(i-1,j);
    
       dfs(i+1,j);
       dfs(i,j-1);
       dfs(i,j+1);
      
      

    } 
    
    
    return maxarea

}

var grid=[ [1,1,0,0,1],
           [0,0,1,1,0],
           [0,1,1,1,0],
           [0,1,1,0,1],
           [0,0,0,1,1]];
           
console.log("answer",areaofisland(grid));

