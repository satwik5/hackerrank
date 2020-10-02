function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    console.log(p, d, m, s);
   // let value=p;

    var count=0;
   while(s>=p){
            count++;
            s -=p;
            p = Math.max(p-d,m);
        }
    return count;
}
