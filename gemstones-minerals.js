function gemstones(arr) {
 console.log(arr);

 var count=0;

    for(let i=97;i<=122;i++){
        let flag= arr.every((element)=>(element.includes(String.fromCharCode(i))))
        if(flag){ count++}
    }
    return count;

}
