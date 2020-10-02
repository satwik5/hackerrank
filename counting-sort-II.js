function countingSort(arr) {

     var array=new Array(Math.max(...arr)+1).fill(0);

    for(let i=0;i<arr.length;i++){
        array[arr[i]]++
    }
        //console.log(array)
    var sorted=[]
    for(let i=0;i<array.length;i++){ //console.log(i,array[i])
        if(array[i]!=0){ 
            let temp= new Array(array[i]).fill(i)
            sorted= sorted.concat(temp)
        }
    }
   // console.log(sorted)
    return sorted

}