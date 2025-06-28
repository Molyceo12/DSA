
let capitalizeSentence=(string)=>{
    return string
    .toLowerCase()
    .split(' ')
    .map(word=>word[0]
      .toUpperCase()+word.slice(1)).join(" ");
}





let capitalizeNew=(string)=>string
.toLowerCase()
.split("")
.map(word=>word[0].toUpperCase()+word.slice(1))

.join("  ");
console.log(capitalizeNew('hello word'))
console.log(capitalizeNew('Molyceo webDev'))