function repeatedString(s, n) {
    console.log(s, n);
    if(s.length==1 ){
        return s[0]=='a'? n: 0;
    }
    if(s.length<1){return 0;}

    
    var divisor = Math.floor(n/s.length);
    var count_left= n-( s.length * divisor)
   
    var a_count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='a'){
            a_count++;
        }
    }

 console.log( divisor, count_left, a_count);
 a_count=a_count*divisor
    for(let i=0;i<count_left;i++){
        if(s[i]=='a'){a_count++}
    }

    return a_count
}