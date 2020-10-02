function hurdleRace(k, height) {
    console.log(k, height);
    let max = Math.max(...height);
    return max>k?max - k:0;
}