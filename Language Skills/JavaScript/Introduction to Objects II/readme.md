##1. An Objective Review
```script.js
var james = {
    job:"programmer",
    married:false
};
function Person(job, married) {
    this.job = job;
    this.married = married;
}
var gabby = new Person("student", true);
```
##2. Fun with Functions
```script.js
function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function(){
        console.log ("Hello!");
        return;
    };
    
}

var user = new Person("Codecademy Student",false);
user.speak();
```
##3. Literally Speaking
```script.js
var james = {
    job: "programmer",
    married: false,
    speak: function() {
        console.Log("Hello, I am feeling great");
        console.Log("Hello, I am feeling okay");
    }
};
james.speak("great");
james.speak("just okay");
```
##4. Can I See Your References?
```script.js
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a "+this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();

```
##5. Who's in Your Bracket?
```script.js
var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = ["job"];
// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);
```
##6. I.D. Please
```script.js
// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"
```
##7. Know Thyself
```script.js
var myObj = {
    name:"John"
    
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false
```
##8. Dressed to Impress
```script.js
var suitcase = {
    shirt: "Hawaiian"
};
if(suitcase.hasOwnProperty('shorts')) {
    console.log(suitcase.shorts)
} else {
    suitcase.shorts = "red";
}
```
## 9. Getting IN=timate
```script.js
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
for(var property in nyc) {
    console.log(property)
}
```
##10. List ALL the Properties!
```script.js
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
for(var x in nyc){
    console.log(nyc[x]);
}

```
##11. Class is in Session
```script.js
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) {
    this.radius = radius;
}
```
##12. Teach Snoopy
```script.js
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
snoopy.bark = function() {
  console.log("Hello");
};
snoopy.bark();
```
##13. How do Classes Help Us?
```script.js
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

var me = new Person("John Gaidimas", 150);
printPersonName(me);
```
##14. Prototype to the Rescue
```script.js
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();
```
##15. Prototype Practice
```script.js
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

Cat.prototype.meow = function() {
    console.log("Meow!");
}
gary.meow()


```
##16. It's All in the Genes
```script.js
function Animal(name,numLegs) {
    this.name = name;
    this.numLegs= numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
}

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();
```
##17. Marching Penguins
```script.js
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


// create a Penguin constructor here
function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};



// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();
```
##18. DRY Penguins
```script.js
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
Penguin.prototype = new Animal();
// set its prototype to be a new instance of Animal


```
##19. Black (and White) Penguin Magic
```script.js
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
Penguin.prototype = new Animal();
// set its prototype to be a new instance of Animal

var penguin = new Penguin("Admiral Ackbar");
penguin.sayName();


```
##20. Penguins, Properties, and the Prototype
```script.js
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}
Emperor.prototype = new Penguin();
// create an "emperor" object and print the number of legs it has
var emperor = new Emperor("Han Shot First");
console.log(emperor.numLegs);
```
##21. Up the Food0I-mean-Prototype-Chain
```script.js
// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true
```
##22. Open to the Public
```script.js
function Person(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
}

var john = new Person('John','Smith',30);
var myFirst = john.firstName;
var myLast = john.lastName;
var myAge = john.age;

//declare variable myAge set to the age of the john object.

```
##23. Private Variables 
```script.js
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person 
var john = new Person("John","G",150);

// try to print his bankBalance
console.log(john.bankBalance)
```
##24. Accessing Private Variables 
```script.js
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      return bankBalance;   
   };
}
var john = new Person('John','Smith',30);
console.log(john.bankBalance);

var myBalance = john.getBalance();
console.log(myBalance);
```
##25. Private Methods
```script.js
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };  
   this.askTeller = function() {
      return returnBalance;
   };
   
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);
```
##26. Passing Arguements
```script.js
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
var myBalance = john.askTeller(1234);

```
##27. Looks For-in to Me
```script.js
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};
for(var x in languages) {
    if(typeof languages[x] == "string"){
        console.log(languages[x]);
    }
};

```
##28. Hello? Yes, This is Dog
```script.js
function Dog (breed) {
    this.breed = breed;
};

Dog.prototype.sayHello = function() {
    console.log("Hello this is a " + this.breed + " dog")
}


var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

```
##29. So Meta I can't Take It!
```script.js
// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);

```
##30. Private Eye
```script.js
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());
```
