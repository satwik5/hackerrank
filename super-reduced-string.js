function superReducedString(s) {
    console.log(s);
    var index=0
    while(index<s.length-1){
        if(s[index]==s[index+1]){
             s=s.substring(0,index)+s.substring(index+2, s.length);
             index=0
        }else{
              index++;
        }
    }
    console.log(s)
    return s==''?'Empty String': s;
}
