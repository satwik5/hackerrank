function viralAdvertising(n) {

    console.log(n);
    var likes=2;
    var value=2;
    var days=2;
    while(days<=n){
         value=Math.floor((3*value)/2);
        likes=likes + value;
        days++;
    }
    return likes
}