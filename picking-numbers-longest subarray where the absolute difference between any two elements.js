
//Given an array of integers, find the longest subarray where the 
//absolute difference between any two elements is less than or equal to 1
function pickingNumbers(a) {
    // Write your code here
    var array_count = []//a.reduce();
    for (let i = 0; i < a.length; i++) {
          console.log( a[i],array_count[a[i]]);
       array_count[a[i]] = array_count[a[i]]?array_count[a[i]]+1:1;
       console.log(array_count[a[i]])

    }
    // console.log(array_count.length)
    var max = 0;
    for (let i = 1; i < array_count.length; i++) {
        let left = (array_count[i] ? array_count[i] : 0) + (array_count[i - 1] ? array_count[i - 1] : 0);
        let right = (array_count[i] ? array_count[i] : 0) + (array_count[i + 1] ? array_count[i + 1] : 0);
        max = max<left?left:max;
        max = max<right?right:max;
       
    } return max

}