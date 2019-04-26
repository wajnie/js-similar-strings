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
### Now we have to make an empty array
```js
let index = [];
```
### Then make a string which will be searched in the list array
```js
let word = "Fi"
// You can replace it with something else
// It can be an argument, for example in a command =search ${argument}
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
### 3. Final Step
Just node the file you put that code inside, and enjoy your output which should be "Fish" if you copied everything of my tutorial. Enjoy!
