function runningTime(arr) {

    var index=0, count=0;
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        index=i-1;
        while(index>=0 && arr[index]>key){
            arr[index+1]=arr[index];
            index--;count++;
        }
       
        arr[index+1]=key;
    }
console.log(arr)
return count;
}
