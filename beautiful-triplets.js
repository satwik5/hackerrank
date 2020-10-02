function beautifulTriplets(d, arr) {
    console.log(d,arr);

    var index=0;
    var count=0;
    while(index<arr.length){
        if(arr.find(function(ele){ return ele==arr[index]+d;}) && arr.find(function(ele){ return ele==arr[index]+2*d;})){
            count+=1
        }
        index++;
    }
    return count
}