function countingSort(arr) {
    var array=new Array(Math.min(100,arr.length)).fill(0);
    console.log(array)
    for(let i=0;i<arr.length;i++){
        array[arr[i]]++
    }
    return array
}
