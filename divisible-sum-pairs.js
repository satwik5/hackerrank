function divisibleSumPairs(n, k, ar) {
//6 3
//1 3 2 6 1 2
var count=0;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            (ar[i]+ar[j])%k==0? count=count+1:count; 
        };
    }
    return count;
}