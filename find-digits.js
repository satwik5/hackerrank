function findDigits(n) {
    console.log(n);
    var digits= n.toString().split('');
    var divisors=0;
 //   console.log(digits)
    for(let i=0;i<digits.length;i++){//console.log(digits[i])
        if(n%digits[i]==0){divisors++}
    }
    return divisors;

}