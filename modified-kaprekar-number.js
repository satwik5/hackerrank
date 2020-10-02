function kaprekarNumbers(p, q) {
    //console.log(p,q);
      var BigNumber= require("bignumber.js");
     BigNumber.config({EXPONENTIAL_AT:1e+9, POW_PRECISION:0});
     var square = new BigNumber(0);
    var result=[];
    let left=0, right=0, total=0;
    if(p<4){ result.push(1); p=4}

    while(p<=q){
        square= BigNumber(p).times(p);
        
        let len=square.toString().length;
       // console.log(square.toString(),Math.floor(len/2),Math.ceil(len/2))
            left=BigNumber(square.toString().substring(0,Math.floor(len/2)));
            right=BigNumber(square.toString().substring(Math.floor((len/2)), len));
        total=BigNumber(left.toString()).plus(right.toString());
       // console.log(left.toString(),'-',right.toString(),'-',total.toString(),'-',p)
        if(total.toString()==p){
            result.push(p)
        }
        p++;
    }
    
    console.log(result.length>0?result.join(' '):'INVALID RANGE')
}