function birthday(s, d, m) {
    //1 2 1 3 2
    //d=3->sum  month =2-> length
    if(s.length<2){
        return s[0]==d && m==1? 1:0;
    }
    var temp=0, count=0;
        for(let i=0;i<s.length;i++){ temp=0;
            for(let posi=i;posi<i+m;posi++){ console.log(s[posi])
               temp=temp+s[posi]
            }
            temp==d?count++:count;
    }return count;
}