function getTotalX(a, b) {
    // Write your code here
    a=a.sort();
    b=b.sort();
   // gcd(10,20);
    //console.log('done')
    var factor=a[0];
    if(a.length==2){
        factor= (a[0]*a[1])/gcd(a[0],a[1]);
    }
    
    for(let i=0;i<a.length;i++){
        factor = lcm(a[i],factor);
    }   
    console.log(factor)
    var gd=b[0];
    for(let j=0;j<b.length;j++){
        gd=gcd(b[j],gd)
    }
    console.log('gd', gd)
    var count=0;
    for(let i=factor, j=2;i<=gd;i=factor*j,j++){ //console.log(i, gd)
        if(gd%i==0){//console.log('yes', i)} 
        count++;}
    }
    return count;
}
function lcm(a,b){
    return (a*b)/gcd(a,b);
}
function gcd(a,b){// 10 20 32
console.log(a,b)
    if(b==0){
        return a;
    }
    return gcd(b, a%b);
}