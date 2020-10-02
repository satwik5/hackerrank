function makingAnagrams(s1, s2) {
    console.log(s1,s2)
    var len=s1.length+s2.length
   var count=0;
    for(let i=0;i<s1.length;i++){
        let val=s1[i];
        if(s2.includes(val)){
           s2= s2.replace(val,'')
            count+=2
        }
    }
    return len-count;
}