
// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    console.log(s);
    var pal=new Array(26).fill(0);
    var index=0;
    while(index<s.length){
        pal[122-s.charCodeAt(index)]++
        index++
    }
   // console.log('pal',pal)
    if(s.length%2==0){
        for(let i=0;i<pal.length;i++){
            if(pal[i]%2!=0){
                return 'NO'
            }
        }
        return 'YES'
    }else{
        let count=0
         for(let i=0;i<pal.length;i++){ console.log(pal[i])
            if(pal[i]%2==1){
                count++
            }
        }
      //  console.log('count',count)
        if(count==1){
            return 'YES'
        }else{ return 'NO'}
    }
}
