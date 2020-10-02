function minimumBribes(q) {

   // console.log(q);
    let index=0;
    var count=0;
    while(index<q.length){ //console.log(index, q[index], index+1)
       if (q[index]-(index+1)>2){console.log( 'Too chaotic');return}
       for(let j=Math.max(0,q[index]-2);j<index;j++){
            if(q[j]>q[index]) count++
        }
        index++;
    }
    console.log(count)
}