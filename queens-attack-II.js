function queensAttack(n, k, r_q, c_q, obstacles) {
    console.log(n, k, r_q, c_q, obstacles)
    var top = n - r_q;
    var bottom = r_q - 1;
    var left = c_q - 1;
    var right = n - c_q;

    var topright = Math.min(top, right);
    var topleft = Math.min(top, left);
    var bottomright = Math.min(bottom, right);
    var bottomleft = Math.min(bottom, left);

    obstacles.forEach(element => {
       // console.log(element[0], element[1])
        //diagonals 
        console.log(element[0],element[1], r_q, c_q)// 5 4 3 2 -->4 3  5 4 top=2 right=3 
        if (element[0] > r_q && Math.abs(element[0]-r_q)==Math.abs(element[1]-c_q)) { 
            if(element[1]>c_q){
                topright=Math.min(element[0]- r_q-1, topright)
            }
            else{
                topleft=Math.min(element[0]- r_q-1,topleft)
            }
        }
        else if(element[0] < r_q && Math.abs(element[0]-r_q)==Math.abs(element[1]-c_q)){
             if(element[1]>c_q){
                bottomright=Math.min(bottomright,  r_q-element[0]-1)
            }
            else{
                bottomleft=Math.min(bottomleft, r_q- element[0]-1)
            }
        }
        // horizantal or vertical
        if(element[0]==r_q){
            if(element[1]>c_q){
                right=Math.min(right, element[1]-c_q-1)
            }else{
                left=Math.min(left,c_q-element[1]-1)
            }
        }else if(element[1]==c_q){
            if(element[0]>r_q){
                top= Math.min(top, element[0]-r_q-1)
            }else{
                bottom=Math.min(bottom, r_q-element[0]-1)
            }
        }
    }
    )
    return top+ bottom+ left+ right+ topleft+ topright+bottomleft+bottomright;
}
