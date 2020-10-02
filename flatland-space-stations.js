function flatlandSpaceStations(n, c) {
    console.log(n,c )
    c=c.sort(function(a,b){return a-b});
    if(n==c.length){ return 0}
    if(n-c.length==1){return 1}
    
    var maxdistance=c[0];
    let index=0
    while(index<c.length-1){
        let distance = Math.floor((c[index+1]-c[index])/2);
        if(distance>maxdistance){
            maxdistance=distance
        }
        index++;
    }

    let last=n-1-c[c.length-1];
    if(last>maxdistance){
        maxdistance=last
    }
    return maxdistance
}
