function libraryFine(d1, m1, y1, d2, m2, y2) {
    console.log(d1, m1, y1,' - ', d2, m2, y2);
    
    if(y1!=y2){
        return y1-y2>0? 10000 :0 ;
    }
    else if(m1!=m2){
        return m1-m2>0? 500 * (m1-m2):0;
    }
    else{
        return d1-d2>0? 15 * (d1-d2):0;
    }
}