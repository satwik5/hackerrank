function pangrams(s) {
  //return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(s)? 'pangram': 'not pangram'

var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for(let val of s){
    let index=arr.findIndex(x=>x==val.toLowerCase());console.log(index, val)
    if(index>=0){
        arr.splice(index, 1);
    }
}
console.log(arr)
return arr.length==0?'pangram':'not pangram';
}
