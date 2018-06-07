##2. .forEach()
```main.js
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log('I want to eat a' + fruit));
```

##3. .map()
```main.js
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map((word) => {
  return word[0];
});

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map((bigNumber) => 
{
  return bigNumber / 100;
});
```

##4. .filter()
```main.js
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

let smallNumbers = randomNumbers.filter(num => num < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);
```

##5. Iterator Documentation
```main.js
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(function(word) {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length > 5));
```

##6. Choose the Right Iterator
```main.js
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
```