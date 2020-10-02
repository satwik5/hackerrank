function permutationEquation(p) {

    console.log(p)
    var x=[], y=[];
    var index=1, i=0;
    while(index<=p.length){ console.log(index,p[i], i)
        if(index==p[i]){ x[index-1]=i+1;index++}
        i++; i=i%p.length;
    }
    console.log(x);
    index=0, i=0;
    while(index<x.length){
        console.log(index,x[index] ,'p',i, p[i])
        if(x[index]==p[i]){y[index]=i+1; index++;}
        console.log(y, index)
        i++; i=i%x.length;
    }
    console.log(y)
    return y;
}