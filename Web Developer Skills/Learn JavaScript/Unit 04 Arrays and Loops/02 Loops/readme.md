##2. Looping by hand
```vacation.js
var vacationSpots = ['America', 'Italy', 'France'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
```
##3. for Loops
```vacation.js
var vacationSpots = ['America', 'Italy', 'France'];

for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
```
##4. for loop backwards
```vacation.js
var vacationSpots = ['America', 'Italy', 'France'];

for (var i = vacationSpots.length - 1; i >= 0; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
```
##5. for loops inside of for loops
```vacationCompare.js
var myPlaces = ['America', 'Italy', 'France'];
var friendPlaces = ['America', 'Italy', 'Canada'];

for (var i = 0; i < myPlaces.length; i++) {
  for (var j = 0; j < friendPlaces.length; j++) {
    if (myPlaces[i] === friendPlaces[j]) {
      console.log(friendPlaces[j]);
    };
  };
};
```
##6. while Loops
```cards.js
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart'

while (currentCard !== 'Spade') {
  console.log(currentCard);
  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a spade');
```
