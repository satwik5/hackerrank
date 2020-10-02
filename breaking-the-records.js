function breakingRecords(scores) {
   
    var count=[0,0];
    var min_temp=scores[0], max_temp=scores[0];
    scores.reduce(function(total,x){
	 if(min_temp>x ) {min_temp=x; count[1]=count[1]+1 } 
	 if(max_temp<x){max_temp=x; count[0]=count[0]+1}
		},0);
   // console.log(count)
	 return count;
}