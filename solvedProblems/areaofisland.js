var islandArea=(grid)=>
{
   if(!grid || grid.length<1)
   {
    return 0;
   }
    var maxarea=0
     var count=0;
    
    let columns=grid[0].length;
    let rows=grid.length;
     for(let i=0;i<rows;i++)
     {
        console.log("row",i);
        for(let j=0;j<columns;j++)
        {   
            console.log(grid[i][j])
            if(grid[i][j]===1)
            {
                count++;
                bfs(i,j,grid);
            }
        }
     }

   function bfs(i,j,grid){
    var queue=[i,j];
    grid[i,j]=0;
    var area=1;
    
    var countArea=true;

    while(queue.length>0)
    {
        var cell=queue.shift();
        var row=cell[0];
        //  console.log("area",area);
        var column=cell[1];

        if(row===0 || column===0 || row===rows-1 || column===columns-1)
        {
            countArea=false;
        }

        if(grid[row-1] && grid[row-1][column])
        {
            grid[row-1][column]=0
            queue.push([row-1,column]);
            area++
        }
        if(grid[row+1] && grid[row+1][column])
        {
            grid[row+1][column]=0
            queue.push([row+1,column]);
            area++
        }
         if(grid[column+1] && grid[row][column+1])
        {
            grid[row][column+1]=0
            queue.push([row,column+1]);
            
            area++
        }
         if(grid[column-1] && grid[row][column-1])
        {
            grid[row][column-1]=0
            queue.push([row,column-1]);
            area++
        }
        

        if(countArea)
        {
            if(area>maxarea)
            {
                maxarea=area
            }
        }
    }


    
}
    
 return [maxarea,count]
   
}

var grid=[[0,1,1,0,0],[0,0,1,0,0],[0,1,0,0,0,],[0,1,1,0,1],[0,0,0,1,1]]
console.log("output of given island",islandArea(grid));

