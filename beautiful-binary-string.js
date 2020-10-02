function beautifulBinaryString(b) {
    console.log(b);
	var count=0;
	for (let i=0;i<b.length-2;i++){
		if(b[i]==0 && b[i+1]==1 && b[i+2]==0){ 
			count++;
			b=b.substring(0,i+2)+'1'+b.substring(i+3)
		}
	}
	return count
}