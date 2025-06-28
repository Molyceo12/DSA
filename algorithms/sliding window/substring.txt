var subString=(string,word)=>{

    var indexes=[];
    var length=Infinity;
    var min=0;
    var max=0;
    var newWord=word;

    if(string.length<word.length)
    {
        return " ";
    }
    
    let i=0;

    while(i<string.length)
    {

    
      if(newWord.includes(string[i]))
      {
         if(min===max && word.length===newWord.length)
         {
            min=i;
         }
         else
         {
            max=i;
         }
        let index=newWord.indexOf(string[i]);
        newWord=newWord.slice(0,index)+newWord.slice(index+1);
      }

      if(newWord.length===0)
      {
          if(length>(max-min)+1)
          {
            indexes=[min,max];
            length=(max-min)+1;
            
          }
          i=min;
          min=min+1;
          max=min+1;
          
          newWord=word;
      }
      i++
    }
    var  left=indexes[0];
    var right=indexes[1];
    return string.slice(left,right+1);

}
console.log("answer",subString('ADOBECBAODEBANC','ABC'));
console.log("answer",subString('A','AA'));
console.log("answer",subString('ahdjsbscabcbcka','abcbc'));

