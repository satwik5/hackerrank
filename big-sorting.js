function bigSorting(unsorted) {
    console.log(unsorted)
     var BigNumber= require("bignumber.js");
    BigNumber.config({EXPONENTIAL_AT:1e+9, POW_PRECISION:0});
    
    var index=0;
    unsorted=unsorted.sort(function(x=BigNumber(x),y=BigNumber(y)){ return BigNumber(x).minus(y).toString()})
    return unsorted

}
