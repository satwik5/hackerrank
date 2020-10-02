function workbook(n, k, arr) {
    console.log(n, k, arr)
    var page=1;
    var special=0;
    var index=0;//chapter
    var problem=1;
    var number=0;
    while(index<arr.length){
       if(problem <=page && page<=Math.min(problem+k-1, arr[index]))
            special++;
        page++;
        problem+=k
        console.log(arr[index],page, number)
        if( problem>arr[index]){
            index++;
            problem=1
        }

    }
    console.log(page)
    return special;
}
