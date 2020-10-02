function beautifulDays(i, j, k) {
    console.log(i,j,k, typeof(i), typeof(k/2));
    var rev=0;

    var temp=i;
    var count=0;
    while(temp<=j){
        rev= temp.toString().split('').reverse().join('');
        //console.log(temp, rev);
        //console.log('value-',(temp-rev)/k );
        Number.isInteger((temp-rev)/k)?count=count+1:count;
        temp++;
    }
    return count;
}