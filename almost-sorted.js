function almostSorted(arr) {
    //   console.log(arr);
    if (arr.length == 1 || isSorted(arr)) {
        console.log('yes'); return;
    }

    var index = 0;
    var left = 1, right = 0;
    while (index < arr.length - 1) {
        if (arr[index] > arr[index + 1]) {
            break;
        }
        index++;
    }
    left = index + 1
    index = arr.length - 1;
    right = 0;
    while (index > left) {
        if (arr[index - 1] > arr[index]) {
            break;
        }
        index--;
    }
    right = index + 1;
    
    if (right - left != 1) {
        let temp1 = arr.slice(0, left - 1).concat(arr.slice(left - 1, right).reverse(), arr.slice(right, arr.length - 1))
        if (isSorted(temp1)) {
            console.log('yes');
            console.log('reverse', left, right); return;
        }
    }

    var test = arr;
    let swap = test[left - 1];
    test[left - 1] = test[right - 1];
    test[right - 1] = swap

    if (isSorted(test)) { console.log('yes'); console.log('swap', left, right); return; }
    
    console.log('no'); return

}

function isSorted(array) { //console.log('isSorted',arr)
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    } return true;
}