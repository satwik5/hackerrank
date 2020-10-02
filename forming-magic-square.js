function formingMagicSquare(s) {
    var arr0 =   [4,9,2,3,5,7,8,1,6];
    var arr1 =   [2,7,6,9,5,1,4,3,8];
    var arr2 =   [6,1,8,7,5,3,2,9,4];
    var arr3 =   [2,9,4,7,5,3,6,1,8];
    var arr4 =   [6,7,2,1,5,9,8,3,4];
    var arr5 =   [8,1,6,3,5,7,4,9,2];
    var arr6 =   [8,3,4,1,5,9,6,7,2];
    var arr7 =   [4,3,8,9,5,1,2,7,6];
    var size=[0,0,0,0,0,0,0,0];
    var length=s.length;

    for(let i=0;i<length;i++){
        let len=s[i].length
       
        for(let j=0;j<len;j++){  let k =s[i][j]
            size[0] += Math.abs(k-arr0[(i*3)+j]);
            size[1] += Math.abs(k-arr1[(i*3)+j]);
            size[2] += Math.abs(k-arr2[(i*3)+j]);
            size[3] += Math.abs(k-arr3[(i*3)+j]);
            size[4] += Math.abs(k-arr4[(i*3)+j]);
            size[5] += Math.abs(k-arr5[(i*3)+j]);
            size[6] += Math.abs(k-arr6[(i*3)+j]);
            size[7] += Math.abs(k-arr7[(i*3)+j]);
        }
    }
    for(let i=0;i<size.length;i++){
        console.log(size[i])
    }
    let min = size.reduce((x,y)=>x<y?x:y);
    //console.log(min);
    return min
}