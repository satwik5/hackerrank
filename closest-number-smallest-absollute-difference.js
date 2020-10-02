function closestNumbers(arr) {
    console.log(arr);
    var min=Math.max(...arr);
    arr.sort(function(x,y){ return x-y});
    var minpairs=[]
    for(let i=0;i<arr.length-1;i++){
        if(min>Math.abs(arr[i]-arr[i+1])){
            min=Math.abs(arr[i]-arr[i+1]);
            minpairs=[arr[i],arr[i+1]]
        }else if(min==Math.abs(arr[i]-arr[i+1])){
            minpairs=minpairs.concat(arr[i],arr[i+1])
        }
    }
    console.log(minpairs)
    return minpairs
}
