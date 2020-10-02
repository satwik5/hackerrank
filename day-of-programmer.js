function dayOfProgrammer(year) {
    var output='';
    if (year < 1918) { 
        if(year%4==0){
            output='12.09.'+year
        }else{
            output='13.09.'+year;
        }
    }
    else if(year==1918){
            output='26.09.1918';
    } else {
        let leap =  year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
       // console.log(leap)
        if (leap) {
            output ='12.09.'+year;
        } else {
            output ='13.09.'+year;
           // console.log(output)
        }
    }
    console.log( output);
    return output
}
