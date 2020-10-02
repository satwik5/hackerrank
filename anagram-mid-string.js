function anagram(s) {
    if(s.length%2==1){
        return -1
    }
    var mid=Math.floor(s.length/2);
    var first= s.substring(0,mid);
    var second=s.substring(mid);

    var count=0
    for(let i=0;i<first.length;i++){
        let val= second.indexOf(first[i]);
        if(val!= -1){ 
            second= second.replace(first[i],'');
        }
    }
    return second.length;
}
