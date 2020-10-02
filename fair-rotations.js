function fairRations(B) {
    console.log(B);
   var sum= B.reduce((x,y)=>(x+y));

   console.log(sum)
   if(sum%2==1){
       return 'NO'
   }
   else{
       let count=0;
       for(let i=0;i<B.length;i++){
           if(B[i]%2==1){
               count+=2;
               B[i]=B[i]+1;
               B[i+1]=B[i+1]+1
           }
       }
       return count
   }
}