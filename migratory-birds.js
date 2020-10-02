function migratoryBirds(arr) {
    arr = arr.sort();
    var number = arr[0]; var total = 0, count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i]) { count++ }
        else {
            if (total < count) { total = count; count = 1; number = arr[i - 1];//  console.log(number, total)
             }
        }
        if (i == arr.length - 1) {
if (total < count) { total = count; count = 1; number = arr[i - 1];  // console.log(number, total)
             }
        }
    }
    return number;
}