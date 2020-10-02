function sockMerchant(n, ar) {
        ar=ar.sort();
        let array=[];
        let pairs=0;
        for(let i=0;i<ar.length;i++){ console.log(ar[i])
            if(array[ar[i]]==undefined || array[ar[i]]==0){
                 array[ar[i]]=1;console.log(i,'if',array[ar[i]]); 
            }
            else{
                array[ar[i]]=0; console.log(i,'else',array[ar[i]])
                pairs++;
            } 
        }
        return pairs;
}
