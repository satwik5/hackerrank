function encryption(s) {
    console.log(s);
    console.log(s.length)
    let breakpoint= Math.ceil(Math.sqrt(s.length));
    let point=0;
    let index=0;
    let result='';
    while(point<breakpoint){
        result=result+s.charAt(index);
        index=index+breakpoint;
        if(index>s.length){ 
            point++;
            index=point;
            result=result+' ';
        }
    }
    return result
}