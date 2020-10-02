function absolutePermutation(n, k) {
    console.log('n',n,'diff',k);
    var arr=[]
    if(k==0){
        for(let i=0;i<=n;i++){
            arr[i]=i;
        }
        arr.shift();
        return arr
    }
    else if((n/k) % 2 != 0){
        return [-1];
    }
    var add=true;
 for(let i=1;i<=n;i++){
    if (add) arr.push(i+k)
    else arr.push(i-k)
                
    if (i % k == 0)
        if (add) add = false
        else add = true
 }
return arr
}