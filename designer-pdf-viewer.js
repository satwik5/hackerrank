function designerPdfViewer(h, word) {
    console.log(h, word)
    let length=word.length;
    let max=0;
    for(let i=0;i<length;i++){
        let temp=h[word.charCodeAt(i)-97]
        console.log(temp)
        temp>max?max=temp:max=max;
    }
   // console.log(max)

    //console.log(word.charCodeAt(0));
  return max*length;
}  