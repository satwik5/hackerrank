function caesarCipher(s, k) {
        console.log(s,k);
        k=k%26;
   var array= []
    var index=0;
    while(index<=s.length){
      //  console.log(s.charCodeAt(index), s[index]);
        if(s.charCodeAt(index)>=97 && s.charCodeAt(index)<=122) {
            if(s.charCodeAt(index) +k >122){
                console.log('next value',s.charCodeAt(index)+k - 26)
                    array[index]=String.fromCharCode(s.charCodeAt(index)+k - 26)
            }else{
                    console.log('small',s.charCodeAt(index)+k,String.fromCharCode(s.charCodeAt(index)+k))
                    array[index]=String.fromCharCode(s.charCodeAt(index)+k)
                }
            }
        else if(s.charCodeAt(index)>=65 && s.charCodeAt(index)<=90){
            if(s.charCodeAt(index) +k>90){
                    array[index]=String.fromCharCode(s.charCodeAt(index)+k- 26)
            }else{
                    console.log('high',s.charCodeAt(index)+k,String.fromCharCode(s.charCodeAt(index)+k))
                    array[index]=String.fromCharCode(s.charCodeAt(index)+k)
            }
        }else{
            array[index]=s[index]
        }
    
        index++;
    }
    return array.join('')
}