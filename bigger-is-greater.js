function biggerIsGreater(w) {
    var array=w.split('')
	var i = array.length - 1;
    while (i >= 0){
        if( array[i - 1] < array[i]){break;}
        else if (i <= 0)
        return 'no answer';
        i--;
    }

    // Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;
    
    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array.join('');
    
}