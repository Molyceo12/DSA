var areaofisland=(grid)=>{

        if(!grid || grid.length<1)
             {
            return

        }
        
        var rows=grid.length;
        var cols=grid[0].length;
        var maxarea=0;

        for(let i=0;i<rows;i++)
        {
            for(let j=0;j<cols;j++)
            {
                if(grid[i][j]===1)
                {
                    var area=0;
                    dfs(i,j);
                    maxarea=Math.max(area,maxarea);
                }
            }
        }

        function dfs(i,j)
        {
            if(i>=rows||j>=cols || i<0 || j<0 || grid[i][j]===0)
            {
                return
            }

            
            grid[i][j]=0;
               area++
            dfs(i,j+1);
            dfs(i,j-1);
            dfs(i+1,j);
            dfs(i-1,j);
        }
    return maxarea
}
var grid=[ [1,1,0,0,1],
           [0,0,1,1,0],
           [0,1,1,1,0],
           [0,1,1,0,1],
           [0,0,0,1,1]];
           
console.log("answer5",areaofisland(grid));