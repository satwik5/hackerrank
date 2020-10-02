function catAndMouse(x, y, z) {
console.log('A', x, 'B', y, 'M', z);

    if (Math.abs(x-z)==Math.abs(y-z)){ return 'Mouse C'}
    if( Math.abs(x-z)>Math.abs(y-z)){
        return 'Cat B'
    }else{ return 'Cat A'}

}