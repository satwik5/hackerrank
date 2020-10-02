function serviceLane(n, t,cases) {
    console.log(n,t, cases);
    var result=[];
    var index=0;
    while(index<cases.length){
        let path=t.slice(cases[index][0], cases[index][1] + 1);
        result.push(Math.min(...path))
        index++
    }
    return result;
}
