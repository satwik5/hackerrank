function jumpingOnClouds(c) {
    console.log(c);
    if(c.length==2 || c.length==3){
        return 1;
    }
    let index=0;
    let jumps=0;
    while(index<c.length-1){ console.log(index, c[index+1], c[index+2])
        if(c[index+2]==0){
            index=index+2;
        }else{
            index=index+1;
        }
        jumps++;
    }
    return jumps;
}