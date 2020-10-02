function twoStrings(s1, s2) {
    console.log(s1,s2);

    for(let i=0;i<s1.length;i++){
       if(s2.includes(s1.charAt(i))){
           return 'YES'
       }
    }
    return 'NO'

}