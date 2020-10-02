function bonAppetit(bill, k, b) {
	bill[k]=0;
	var total = bill.reduce((x,y)=> x+y); //console.log(total, k, b)
	console.log( total/2==b ? 'Bon Appetit': Math.abs((total/2) - b));
}
