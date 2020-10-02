function circularArrayRotation(a, k, queries) {
    console.log(a, k, queries);
    if(k>=a.length){k=k%a.length}
    var result=[];
    let index=0;
    console.log('rotations', k)
    //1 rotation 1 2 3 4 5 -->  5 1 2 3 4 --> 4 5 1 2 3    0 3 4 
    // 1 2 3 --> 3 1 2 --> 2 3 1      0 1 2
    for(let i=0;i<queries.length;i++){ index=queries[i];console.log(index)
        index-k>=0? index=index-k: index= a.length+index-k
        //index+k < a.length ? index=index-k : index=Math.abs(a.length-index-k)
       // index-k<0? index=a.length+index-k : index=index-k;
        console.log('after',index)
        result[i]=a[index];
    }

    console.log(result)
    return result;
}