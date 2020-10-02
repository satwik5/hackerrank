function organizingContainers(container) {
    console.log(container)
    var a=new Array();
    var b = new Array();

    for(let i=0;i<container.length;i++){
        a[i]=0;
        for(let j=0;j<container[i].length;j++){
            if(b[j]==undefined){b[j]=0}
            a[i]=a[i]+container[i][j];
            b[j]=b[j]+container[i][j];
        }
    }
    console.log(a, b)
    var result='Possible';
    var j=0;
    for(let i=0;i<container.length;i++){
        for(j=i;j<container.length;j++){
            if(a[i]==b[j]){
                let temp=b[j];
                b[j]=b[i];
                b[i]=temp;
                break;
            }
        }
         if(j==container.length){
                result = 'Impossible';break
            }
    }
    return result ;
}
