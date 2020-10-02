function squares(a, b) {
   // console.log(Math.sqrt(a), Math.sqrt(b) )
 //  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
   
	console.log(a,b);
	let start=1;
	let end =Math.ceil(b/2);
	var count=0;
	while(start*start <a){
		start++;
	}

	while(start*start <=b){
		count++;
		start++;
	}

return count; 
}