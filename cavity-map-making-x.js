function cavityMap(grid) {
    console.log(grid)
    var rstart=1 , rend=grid.length-1;
    var cstart=1, cend=grid.length-1;

    while(rstart<rend &&cstart<cend){
        let pointer=grid[rstart][cstart]; console.log(rstart, cstart, pointer)
        if(pointer > grid[rstart][cstart-1] && pointer>grid[rstart][cstart+1]
            && pointer> grid[rstart-1][cstart] && pointer > grid[rstart+1][cstart]){
              grid[rstart]=grid[rstart].substring(0,cstart)+'X'+
                           grid[rstart].substring(cstart+1,grid.length)
             }
        cstart++;
        if(cstart==cend){
            cstart=1;
            rstart++;
        }
    }
    return grid
}
