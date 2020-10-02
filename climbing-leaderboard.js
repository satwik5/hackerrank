
function climbingLeaderboard(scores, alice) {  
  var result=[];
  var currentindex=0;
  var lastscrlastscoreoe=0;
  var lastrank=1;
var tempScore=0;
  alice=alice.reverse();

  alice.forEach((aliceValue,key)=>{
      while(currentindex <scores.length){
          let scorevalue=scores[currentindex];
          if(aliceValue>=scorevalue){
              result.push(lastrank)
              break;
          }
          if(scorevalue!=tempScore){
              lastrank++; tempScore=scorevalue
          }
          currentindex++;
      }
      if(currentindex>=scores.length){
          result.push(lastrank)
      }
  })
  return result.reverse();
 }