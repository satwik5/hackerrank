function jumpingOnClouds(c, k) {
    console.log(c, k);
    //var thunders=0;
    var energy=100;
    var start_point=c[0];
    var index=k;
    var length=c.length;
    if(c.length==k){
        return  c[0]==0?energy-1:energy-3;
    }
    
    do{ 
        c[index]==0? energy=energy-1: energy=energy-3;
       console.log( index, c[index], energy)
        index=index+k;
        if(index+k>=length){ index=index%length;}
        console.log('next',index)
    }while(index>0);
   return  c[0]==0?energy-1:energy-3;
}