function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var l_apples=[], l_oranges=[];
    for(let i=0;i<apples.length;i++){
        l_apples.push(a+apples[i])
    }
    for(let i=0;i<oranges.length;i++){
        l_oranges.push(b+oranges[i])
    }
//console.log(l_apples, l_oranges)
    var ap_count=0,or_count=0;
    ap_count = l_apples.reduce(function(count,x){return x>=s && x<=t? count+1:count},0);
    or_count = l_oranges.reduce(function(count,x){return x>=s && x<=t? count+1:count},0);
    console.log(ap_count);
    console.log(or_count)
}