function equalizeArray(arr) {
  
    if(arr.length==1){ return 0;}
    else if(arr.length==2){ return a[0]!=a[1]?1:0;}
    arr=arr.sort(function(x,y){ return x-y;})
      console.log(arr);
    let index=0, max=0, temp=1;
    //let point=arr[0];
    while(index<arr.length-1){ console.log(arr[index], arr[index+1],index, temp, max)
        if(arr[index]!=arr[index+1]){
             if(max<temp){ max=temp;}
             temp=1;
        }else{
            temp++;
        }
        index++;
    }

    if(max<temp && max!=0){max=temp;}
        console.log(max)
    return max>0 ?arr.length-max:0;
}