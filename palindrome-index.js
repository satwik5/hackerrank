function palindromeIndex(s) {
    if(s==s.split('').reverse().join('')){
        return -1;
    }
    var string=s.split('')
    var start=0,end=0;
    for(let i=0, j=s.length-1;i<j;i++,j--){
        if(s[i]!=s[j]){
            start=i;end=j;break;
        }
    }
    string.splice(start,1);
    //console.log(string, start, end, string.join(''),string.reverse().join(''))
    if(string.join('')==string.reverse().join('')){
        return start;
    }else{
        return end;
    }
   // console.log(string)

}
