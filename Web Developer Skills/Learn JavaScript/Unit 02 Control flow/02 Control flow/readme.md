##2. if/else Statements
```ifElse.js
var harryPotterFan = false;
if(harryPotterFan){
  console.log('Mischief managed.');
} else {
  console.log('I lead a muggle\'s life.');
}
```
##3. Comparison Operators
```comparison.js
var hungerLevel = 10;

if(hungerLevel > 7){
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later.');
}
```
##4. Comparisons Operators II
```werewolf.js
var moonPhase = 'full';
if(moonPhase === 'full'){
  console.log('Howwwwlll!!');
} else {
  console.log('I swear I am not a werewolf...');
}
```
##5. else if Statements
```werewolf.js
var moonPhase = 'full';
if(moonPhase === 'full'){
  console.log('Howwwwlll!!');
} else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new'){
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}
```
##6. Logical Operators
```werewolf.js
var moonPhase = 'full';
var foggyNight = true;
if(moonPhase === 'full' && foggyNight){
  console.log('Howwwwlll!!');
} else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new'){
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}
```
##7. switch Statements
```werewolf.js
var moonPhase = 'full';
switch(moonPhase){
  case 'full':
  console.log('Howwwwlll!!');
  break;
  case 'mostly full':
  console.log('Arms and legs are getting hairier');
  break;
  case 'mostly new':
  console.log('Back on two feet');
  break;
  default:
  console.log('Invalid moon phase');
  break;
}
```
