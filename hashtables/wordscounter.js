var wordCounter=(text)=>{
   var lowerText=text.toLowerCase();

   var  worldMap={};

  var words= lowerText.split(/\s+/);
 

  for(let word of words)
  {
       if(word in worldMap)
       {
          worldMap[word]++

       }
       else
       {
        worldMap[word]=1
       }
  }

  var result= worldMap;
  return result

}












const string="walk the dog dog dog   ";
console.log(wordCounter(string));