function saveThePrisoner(n, m, s) {
    console.log(n, m ,s);
   
    m>=n? m= m%n:m=m;  //removing all the looped sweets
        if(m+s-1>n){
            m= (m+s-1)%n; //handling to not go beyond priosners count
            console.log('beyond',m)
            return m;
        }
    console.log(n, m ,s);
    if(m+s-1==0){return n}
    return m+s-1;

}