function separateNumbers(s) {

    var BigNumber= require("bignumber.js");
    BigNumber.config({EXPONENTIAL_AT:1e+9, POW_PRECISION:0});
    if(s.length==1){console.log('NO');return ;}
   // if(s.length==2){ if(s.charAt(1)-s.charAt(0)==1){console.log('YES', s.charAt(0))}else{console.log('NO'); return ;}}
    var temp='';
    var mid=Math.floor(s.length/2);
    var prev=new BigNumber(0);
    var next=new BigNumber(0);
    for(let i=1;i<=mid;i++){
        temp=s.substring(0,i);
         prev=temp; 
        while(temp.length<s.length){ 
            next= BigNumber(prev).plus(1).toString()
            temp =BigNumber(temp).toString()+next.toString();
            prev=next;
        }
        if(temp==s){
            console.log('YES', s.substring(0,i));return ;
        }
    }
    console.log('NO')
}