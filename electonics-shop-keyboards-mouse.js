function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
   // console.log(Math.min(...keyboards), Math.min(...drives))
    if(b < Math.min(...keyboards)+Math.min(...drives)){return -1;}
    var remaining=0;
    var max_utilized=0;
   // console.log(keyboards.length, drives.length)
      for(let i=0;i<keyboards.length;i++){
          remaining = b-keyboards[i]; 
          for(let j=0;j<drives.length;j++){//console.log('key', keyboards[i], 'drive', drives[j], 'remin',remaining)
              if(drives[j]<=remaining){ 
                  max_utilized= max_utilized<(keyboards[i]+drives[j])?keyboards[i]+drives[j]:max_utilized;
              }
          }
         
      }
     //  console.log(max_utilized);
    return max_utilized;
}