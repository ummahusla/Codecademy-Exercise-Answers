## 1. Arrays
```javascript
// ATTENTION: We do not advise the copy of a whole answer of some
//            of the exercises, since (maybe) some snippet of the
//            answer might need to be deleted in order to the codecademy
//            platform recognize the answer, of a first step, as right.
let bucketList = [
  'Rappel into a cave',
  'Take a falconry class',
  'Learn to juggle',
];

console.log(bucketList);
```
## 2. Create an Array
```javascript
let newYearsResolutions = ['one', 'two', 'three'];
console.log(newYearsResolutions);
```
## 3. Property Access
```javascript
let newYearsResolutions = ['one', 'two', 'three'];

let listItem = newYearsResolutions[0];
console.log(listItem);
console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
```
## 4. Update Element
```javascript
let newYearsResolutions = ['one', 'two', 'three'];
newYearsResolutions[1] = 'Learn a new language';
```
## 5. Length property
```javascript
let newYearsResolutions = ['one', 'two', 'three'];
console.log(newYearsResolutions.length);
```
## 6. Push method
```javascript
let newYearsResolutions = ['one', 'two', 'three'];

newYearsResolutions.push('four', 'five');
console.log(newYearsResolutions);

newYearsResolutions.pop();
console.log(newYearsResolutions);
```
## 7. More array methods
```javascript
let groceryList = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

let newList = groceryList.slice(1, 4);
console.log(newList);
```
## 8. Arrays with let and const
```javascript
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Tabasco');
condiments = ['Test'];
console.log(condiments);

utensils.pop();
utensils = ['Hashi'];
```
## 9. Review Arrays
```javascript
// no code necessary
```
