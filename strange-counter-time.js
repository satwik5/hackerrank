// Complete the strangeCounter function below.
function strangeCounter(t) {
    console.log(t);
    let cycle=0 //2^0 2^1 2^2 ... 
    var sum=0;
    var val=0;
    while(true){
        val=3*Math.pow(2,cycle);console.log('here',val)
        if(sum>=t){
            break;
        }
        sum+=val;
        cycle++;
    }
    console.log('sum',sum, cycle)
    return sum-t+1
}
