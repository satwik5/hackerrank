function alternatingCharacters(s) {
    var i=1,count=0;
    while(i<s.length){
        if(s[i]==s[i-1]){
            count++
        }i++
    }
    return count
}