function insertionSort2(n, arr) {
  //  console.log(arr.join(' '))
    var index=1;
    var key=0;
    var j=0;
    while(index<n){
        key=arr[index];
        j=index-1;
        while(j>=0 && arr[j]>key){// console.log(j,key, arr[j],arr[j+1])
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=key;
        console.log(arr.join(' '))
        index++;
    }
   // console.log(arr.join(' '))
}
