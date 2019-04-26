const sm = require('string-similarity');
let index = [];
let list = [
  "Horse",
  "Hammer",
  "Fish",
  "Red",
  "Sheep"
  ]
let word = "Fi"
list.forEach(function(){
  index.push(list);
})

 let match = sm.findBestMatch(word, list);
 let target = match.bestMatch.target;
console.log(target)