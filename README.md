# js-similar-strings
Using another library string-similarity

# 1. Installing the library
Install it by running npm: `npm install string-similarity`

# 2. Coding
### Ok, so now we have to request for the library
```js
const sm = require('string-similarity');
```
### Next we have to make an array for searching the words
```js
let list = [
"Horse",
"Hammer",
"Fish",
"Red",
"Sheep"
]
```
### Now we have to make 2 empty arrays
```js
let index = [];
let index1 = [];
```
### Then make a word which will be searched
```js
let word = "Fi"
// You can replace it with something else
```
### After that, the forEach loop which checks all words in list array
```js
list.forEach(function(){
  index.push(list);
})
```
### Now we are using our required library
```js
let match = sm.findBestMatch(word, list);
```
And a target
```js
let target = match.bestMatch.target;
```
### Now just log the target, target is our output
```js
console.log(target)
```
