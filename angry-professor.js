function angryProfessor(k, a) {
  
  a=a.sort();
  console.log(k,a);
  let index=0;
    while(a[index]<=0){
        console.log('in',a[index])
        index=index+1;

    }
 //   console.log(index)
    return k>index? 'YES':'NO';

}