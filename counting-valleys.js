function countingValleys(steps, path) {
    // Write your code here
    var sum=0;
    var valley=0
    for(let i=0;i<steps;i++){
       // path.charAt(i)=='U'?sum++:sum--;
        path.charAt(i)=='D'?sum--:sum++;
        if(sum==0 && path.charAt(i)=='U' ){
            valley++;
        }
    }return valley;
}