function insertionSort1(n, arr) {
   // console.log(n ,arr)
    var key=0;
    var i=0;
    var j=0;
  
  for(i=2;i<n;i++){
      key=arr[i]
      j=i-1;
      while(j>=0 && arr[j]>key){
          arr[j+1]=arr[j];
          j--;
          console.log(arr.join(' '))
      }
      arr[j+1]=key;
  }
        console.log(arr.join(' '))
}
