function timeInWords(h, m) {
    var     n = [
        "zero", 
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "half"
    ];

    console.log(h,m);

    if(m==0){
        return n[h] +' o\' clock';
    }else if(m<=30){
        if(m==1) return n[m] +' minute past '+n[h];
        else if(m==15 || m==30) return n[m] +' past '+n[h];
        else return n[m] +' minutes past '+n[h];
    }else{
        if(60-m==15){ return 'quarter to '+ n[h+1]}
        else return n[60-m] + ' minutes to '+n[h+1];
    }

}