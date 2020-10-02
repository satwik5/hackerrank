function countSort(arr) {

    var sorted = [];
    var half = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i][1]
        if (half > i) {
            value = '-'
        }
        arr[i][1] = value;
        if (sorted[arr[i][0]] == undefined) {
            sorted[arr[i][0]] = value
        } else {
            sorted[arr[i][0]] = sorted[arr[i][0]] + ' ' + value
        }
    }

    console.log(sorted.join(' ').trim())
}