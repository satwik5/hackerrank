function hackerrankInString(s) {
    console.log(s);

    var index=0;
    var pointer=0;
    var string = 'hackerrank'
    if(string.length>s.length){return 'NO'}
    while(index<s.length){console.log(string.charAt(pointer),s.charAt(index),index, pointer)
       if( string.charAt(pointer)==s.charAt(index)){
           //index=pointer+1;
           pointer++;
        }
            index++;
        
      //  console.log(pointer, string.length)
        if(pointer==string.length){ return 'YES'}
    }
    return 'NO';

}