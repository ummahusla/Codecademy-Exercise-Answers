## 1. Loops
```javascript
// ATTENTION: We do not advise the copy of the complete code of some
//            of the lessons, since (maybe) some snippet of the
//            answer might need to be deleted in order to the codecademy
//            platform recognize the answer necessary to a first step of the 
//            exercise.
let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i < cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}
```
## 2. Looping Manually
```javascript
const vacationSpots = ['Rio', 'Recife', 'Rua'];

for (
  let vacationSpotIndex = vacationSpots.length - 1;
  vacationSpotIndex >= 0;
  vacationSpotIndex--
) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}
```
## 3. for Loops
```javascript
const vacationSpots = ['Rio', 'Recife', 'Rua'];

for (
  let vacationSpotIndex = vacationSpots.length - 1;
  vacationSpotIndex >= 0;
  vacationSpotIndex--
) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}
```
## 4. for Loops, Backwards
```javascript
const vacationSpots = ['Rio', 'Recife', 'Rua'];

for (
  let vacationSpotIndex = vacationSpots.length - 1;
  vacationSpotIndex >= 0;
  vacationSpotIndex--
) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}
```
## 5. Nested for Loops
```javascript
const myPlaces = ['Rio', 'Ruanda', 'Roma'];
const friendPlaces = ['Rio', 'Rua', 'Rash'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  console.log(myPlaces[myPlacesIndex]);

  for (
    let friendPlacesIndex = 0;
    friendPlacesIndex < friendPlaces.length;
    friendPlacesIndex++
  ) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
      console.log(myPlaces[myPlacesIndex]);
    }
  }
}
```
## 6. while Loops
```javascript
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Spade';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);
```
## 7. Infinite Loops
```javascript
let thingsToDo = [
  'do laundry',
  'take out the garbage',
  'make dinner',
  'walk the dog',
  'go to the bank',
];

for (
  let thingsToDoIndex = thingsToDo.length - 1;
  thingsToDoIndex >= 0;
  thingsToDoIndex--
) {
  console.log('I need to ' + thingsToDo[thingsToDoIndex] + '.');
}

while (thingsToDo.length > 3) {
  console.log('I have too many things to do!');
  thingsToDo.pop();
}
```
## 8. Review: Loops
```javascript
// no code necessary
```
