function taumBday(b, w, bc, wc, z) {
    // Write your code here 7 7 4 2 1
    console.log('black',b,'white', w,'bcost', bc,'wcost', wc,'converstion', z);
    var BigNumber= require("bignumber.js");
    BigNumber.config({EXPONENTIAL_AT:1e+9, POW_PRECISION:0});
    //way 1
 return (BigNumber(b).times(Math.min(bc, wc+z)).plus(BigNumber(w).times(Math.min(wc,bc+z)))).toString();
   //way 2
   var cost =new BigNumber(0);
    if(z>=Math.abs(bc-wc) || bc==wc){ 
        cost=BigNumber(b).times(bc).plus(BigNumber(w).times(wc));
    }
    else if(bc>z+wc){ 
        cost = BigNumber(b+w).times(wc).plus(BigNumber(b).times(z))
    }
    else if(wc>z+bc){ 
        cost = BigNumber(b+w).times(bc).plus(BigNumber(w).times(z));
    }
    return cost.toString();
}