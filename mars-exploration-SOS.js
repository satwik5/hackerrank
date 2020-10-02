function marsExploration(s) {
    console.log(s);

    var length=s.length;
    var sCount=0;
    
    var index=0;
    while(index<length){ 
        if( 'SOS'.charAt(index % 3)!= s.charAt(index)){
            sCount++; 
        }
        index++;
    }
    return sCount;
    
}
