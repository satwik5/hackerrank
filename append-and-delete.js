function appendAndDelete(s, t, k) {
    console.log(s,t,k);
   var slen=s.length;
   var tlen=t.length;

    if(s.length+t.length <=k || (s==t && k%2==0)){return 'Yes'};
    var common=0;

    for(let i=0;i<Math.min(slen,tlen);i++){ 
        if(s[i]==t[i]){ common++; }
        else{ break; }
    }
    if(slen+tlen -(2*common) <=k && k%2== (slen+tlen)%2 ){
        return 'Yes';
    }
    return 'No';
}