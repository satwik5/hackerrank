function funnyString(s) {
    console.log(s);
    var i=0;
    var end=s.length-1;
    while(i<=s.length/2){
         console.log(s.charCodeAt(i+1),s.charCodeAt(i),s.charCodeAt(end-i),s.charCodeAt(end-i-1))
        if(Math.abs(s.charCodeAt(i+1)-s.charCodeAt(i))!=Math.abs(s.charCodeAt(end-i)-s.charCodeAt(end-i-1))){
            return 'Not Funny';
        }
        i++;
    }
    return 'Funny'
}