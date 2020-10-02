function minimumDistances(a) {
    console.log(a);
    var index=0;
    var distance=a.length;
    var temp=-1;
    var map=new Array();
   // map.push([0,0])

    while(index<a.length){
        if(map.find(val=>{ return val[0]==a[index]?true:false },0)){
            let value=map.find(val=>{ return val[0]==a[index]?index:0 },0);
            console.log(value[1], distance, index);
            distance=Math.min( Math.abs(value[1]-index), distance);
            console.log(distance)
        }else{
            console.log('pushing',a[index], index)
            map.push([a[index],index])
        }
        index++;
    }
return distance!=a.length?distance:-1;
}