var findWord=(grid,word)=>{
    var rows=grid.length;
    var columns=grid[0].length;
    

    let itFound=false;

    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            if(grid[i][j]===word[0]);
            {
                 dfs(i,j,0)
            }
        }
    }


    function dfs(i,j,k)
    {
       if(k===word.length)
       {
        itFound=true;
        return
        
       }

       if(i<0||j<0||j>=columns||i>=rows||grid[i][j]!==word[k])
       {
           return
       }

       var temp=grid[i][j];
       grid[i][j]='#'

       dfs(i+1,j,k+1);
       dfs(i-1,j,k+1);
       dfs(i,j+1,k+1);
       dfs(i,j-1,k+1);

       grid[i][j]=temp
        
    }

   return itFound
}

const grid=[
            ['A','M','E','R','I','C','A'],
            ['M','E','K','I','C','S','F'],
            ['A','R','R','C','C','S','F'],
            ['B','J','M','A','F','G','I']
        ];

console.log("find a word",findWord(grid,'AMERICA'));