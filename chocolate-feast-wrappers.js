function chocolateFeast(n, c, m) {
    console.log(n, c,m);
    var chocolates=Math.floor(n/c);
    var wrappers=chocolates;
    var leftwrappers=0;
    while(wrappers>=m){
       // console.log(wrappers);
        leftwrappers=wrappers%m;
        //if(leftwrappers>=m){ leftwrappers=leftwrappers-m;wrappers++;}
        wrappers=Math.floor((wrappers)/m);
        //console.log('after',wrappers, leftwrappers);
        chocolates=chocolates+wrappers;
        wrappers=wrappers+leftwrappers;

    }return chocolates
}
