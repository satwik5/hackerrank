function theLoveLetterMystery(s) {
    var array=s
    var arr=s.split('').reverse().join('')
    var mid=Math.floor(arr.length/2);
    var count=0;
   
    for(let i=0;i <mid; i++){
        if(arr[i]!=array[i]){  console.log(arr.charCodeAt(i),array.charCodeAt(i))
            count+= Math.abs(arr.charCodeAt(i)-array.charCodeAt(i))
        }
    }
    return count;
}
