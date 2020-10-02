function larrysArray(A) {
   // console.log(A);
    var arr=A;
    var temp=A;
    var index=1;
   // console.log('start')
    var j=0,count=0;
    while(index<arr.length){ 
        let val=arr[index];
        j=index-1;//console.log(arr[j],arr[index])
        while(j>=0 && arr[j]>val){ count++;
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=val;
       // console.log(arr)
        index++
    }
   // console.log(count);
    
    return count%2==0?'YES':'NO'
}
