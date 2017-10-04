## 1. Introduction to Control Flow
```javascript
 let userName = 'Luiz';
let knowsJavaScript = 0;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}
```
## 2. if/else Statements
```javascript
let isSoccerFan = true;

if (isSoccerFan) {console.log('Goal!')}else{console.log('No goal!')}
```
## 3. True and False Values
```javascript
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'oi';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
```
## 4. True and False Values II 
```javascript
let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'oi';
if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
```
## 5. Comparison Operators
```javascript
let hungerLevel = 10

if (hungerLevel > 7){console.log('Time to eat!')}else{console.log('We can eat later!')}
```
## 6. Comparison Operators II
```javascript
let moonPhase = 'full';

if (moonPhase === 'full' || isFoggyNight ) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
 console.log('Arms and legs are getting hairier')}
else if(moonPhase === 'mostly new'){console.log('Back on two feet')}
else{console.log('invalid moon phase')}

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('invalid moon phase');
    break;
}
```
## 7. else if Statements
```javascript
let moonPhase = 'full';

if (moonPhase === 'full' || isFoggyNight ) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
 console.log('Arms and legs are getting hairier')}
else if(moonPhase === 'mostly new'){console.log('Back on two feet')}
else{console.log('invalid moon phase')}

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('invalid moon phase');
    break;
}
```
## 8. Logical Operators
```javascript
let moonPhase = 'full';

if (moonPhase === 'full' || isFoggyNight ) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
 console.log('Arms and legs are getting hairier')}
else if(moonPhase === 'mostly new'){console.log('Back on two feet')}
else{console.log('invalid moon phase')}

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('invalid moon phase');
    break;
}
```
## 9. switch Statements
```javascript
let moonPhase = 'full';

if (moonPhase === 'full' || isFoggyNight ) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
 console.log('Arms and legs are getting hairier')}
else if(moonPhase === 'mostly new'){console.log('Back on two feet')}
else{console.log('invalid moon phase')}


switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('invalid moon phase');
    break;
}
```
## 10. Ternary Operator 
```javascript
let isLocked = false;

isLocked ? 
  console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ?
  console.log('Correct!') :
  console.log('Incorrect!')

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!")
```
## 11. Review Control Flow
```javascript
let isLocked = false;

isLocked ? 
  console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ?
  console.log('Correct!') :
  console.log('Incorrect!')

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!")
```
