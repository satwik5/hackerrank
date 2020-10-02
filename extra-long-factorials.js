function extraLongFactorials(n) {
   // console.log(n);
    var BigNumber= require("bignumber.js");
    BigNumber.config({EXPONENTIAL_AT:1e+9, POW_PRECISION:0});
    
    var fact=new BigNumber(1);
    for(var i=1; i<=n; i++){
        //console.log(fact)
        fact= fact.multipliedBy(i);
     //   fact= fact.times(i);
    }
    //console.log(fact.toString().length)
    return fact.toString();
}