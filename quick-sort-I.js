function quickSort(arr) {
    var left=new Array();
    var eq=new Array();
    var right= new Array();
    var pivot=arr[0];
    for(let i=0;i<arr.length;i++){ 
        if(arr[i]==pivot){
            eq.push(arr[i])
        }else if(arr[i]>pivot){
            right.push(arr[i])
        }else if(arr[i]<pivot){
            left.push(arr[i])
        }
    }
    return left.concat(eq, right);
}
