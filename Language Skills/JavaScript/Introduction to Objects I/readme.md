##1. We've come a long, long...
```script.js
(((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");
answer = true;
```
##2. Through the hard times...
```script.js
// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,48];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[6] % 8 !== 0;
```
##3. ...And the good!
```script.js
for(var counter = 1;counter<21;counter++){
    if(counter%5===0&&counter%3===0){
        console.log("FizzBuzz");

    }
    else{
    if(counter%3===0){
        console.log("Fizz");
    } 
    if(counter%5===0){
        console.log("Buzz");  
    }
    if(counter%5!==0&&counter%3!==0){
        console.log(counter);  
    }
    }
}
```
##4. I have to celebrate you baby
```script.js
var getReview = function (movie){
    switch(movie) {
        case "Toy Story 2":
            return("Great story. Mean prospector.");
            break;
        case "Finding Nemo":
            return("Cool animation, and funny turtles.");
            break;
        case "The Lion King":
            return("Great songs.");
            break;
        default:
            console.log("I don't know!");
    }
}
```
##5. I have to praise you like I should!
```script.js
console.log("I'm ready for Objects!");
```
##6. Intro
```script.js
var bob = new Object()
```
##7. Properties
```script.js
var bob = new Object()
```
##8. Accessing Properties
```script.js
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name
var age2 = susan.age
```
##9. Accessing Properties, Part 2
```script.js
// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];
```
##10. Another Way to Create
```script.js
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

var susan1 = {
  name: "Susan Jordan",
  age: 24
};

var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;
```
##11. Putting it all together
```script.js
var snoopy = {
    species: "beagle",
    age: 10
}
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;
```
##12. More Practicing Making Objects
```script.js
var bicycle = new Object();
bicycle.speed = 0;
bicycle.gear = 1;
bicycle.frame_material = "carbon fiber";
```
##13. Function Review
```script.js
// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product
var multiply = function (x,y) {
    return x*y;
};
multiply(15,10);
```
##14. So What's a Method
```script.js
// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20
bob.setAge(20);
```
##15. Why Are Method's Important?
```script.js
var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());
```
##16. The 'this' Keyword
```script.js
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50);
```
##17. "This" Works for Everyone
```script.js
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 using the method
susan.setAge(35);
```
##18. Make Your Own Method
```script.js
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth){
  this.width = newWidth;
}
rectangle.setWidth(8);
rectangle.setHeight(6);
// here change the width to 8 and height to 6 using our new methods

```
##19. More Kinds of Methods
```script.js
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
square.calcArea = function() {
  return Math.pow(this.sideLength, 2);
};
var p = square.calcPerimeter();
var a = square.calcArea();
```
##20. The Object Constructor
```script.js
// here we make bob using the Object constructor
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 20;
// add bob's age here and set it equal to 20
```
##21. Custom Constructors
```script.js
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 275);

```
##22. Try it Out!
```script.js
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, breed, color) {
 this.age = age;
 this.breed = breed;
 this.color = color;
}
```
##23. More Options 
```script.js
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);
```
##24. Constructors With Methods 
```script.js
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  this.calcPerimeter = function() {
      return this.height*2+this.width*2;  
  }
  
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
```
##25. Constructors in Review
```script.js
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");
```
##26. Arrays of Objects
```script.js
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// add the last family member, "timmy", who is 6 years old
```
##27. Loop the Loop
```script.js
//Person Constructor
function Person(name,age) {
    this.name = name;
    this.age = age;
}
//Array of People
var family = new Array();
family[0] = new Person("alice",40);
family[1] = new Person("bob",42);
family[2] = new Person("michelle",8);
family[3] = new Person("timmy",6);
//Loop Through New Array
for(i=0;i<4;i++) {
    console.log(family[i].name)
}
```
##28. Passing Objects into Functions
```script.js
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice,billy);
```
##29. Try it Out!
```script.js
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

var olderAge = function(person1, person2) {
    if(person1.age>person2.age) {
        return person1.age;
    }
    else{
        return person2.age;    
    }
}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

```
##30. What are Objects For?
```script.js
var spencer = {
  age: 22,
  country: "United States"
};
var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";

```
##31. Properties
```script.js
var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species = "beagle";
// use bracket notation for snoopy's age
var age = snoopy["age"] = 10;
```
##32. Customizing Constructors
```script.js
    // 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320,"J.R.R. Tolkien");
```
##33. Methods
```script.js
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    this.perimeter = function () {
        return 2 * Math.PI * this.radius  
    };
    
};
```