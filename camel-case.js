function camelcase(s) {
console.log(s);
var count=1;
for(let i=0;i<s.length;i++){
    let letter=s[i];console.log(s[i], s.charAt(i))
   // if(letter.charCodeAt(0) >=65 && letter.charCodeAt(0) <91){
      if(s[i] >='A' && s[i]<='Z'){
        count++
    }
}
return count;


}