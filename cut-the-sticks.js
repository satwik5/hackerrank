// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
 
    arr=arr.sort(function(a, b){return a - b});
    console.log(arr);
    var n_arr=[];
    n_arr[0]=arr.length;
    let next_array=1;
    for(let i=1;i<arr.length;i++){
        console.log(arr[i], arr[i-1])
        if(arr[i]!=arr[i-1]){
            n_arr[next_array]=arr.length-i;
            next_array++;
        }
    }

return n_arr
}