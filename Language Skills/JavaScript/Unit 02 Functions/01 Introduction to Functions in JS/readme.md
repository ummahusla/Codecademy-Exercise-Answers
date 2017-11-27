## 1. Introduction
```script.js
var speed = 65;
if (speed > 80) 
{
	console.log("Slow down")
} 
else 
{
	console.log("Drive safe")
}
```
## 2. Introducting Functions
```script.js
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(8);
```
## 3. Function Syntax
```script.js
// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

greeting("John");

```
## 4. How does a function work?
```script.js
var foodDemand = function(food) {
    console.log("I want to eat "+ food);
}
foodDemand("Pizza");
```
## 5. Tying it all together
```script.js
// Nicely written function:
var calculate = function (number) 
{
    var val = number * 10;
    console.log(val);
};

var greeting = function(name) 
{
    console.log(name)
};
greeting("John");
```
## 6. Don't Repeat Yourself (D.R.Y.)
```script.js
var orangeCost = function(cost)
{
    var costOrange = cost*5;
    console.log(costOrange);
};
orangeCost(5)
```
## 7. Return Keyword
```script.js
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};


var newNumber = timesTwo(10000);
console.log(newNumber);
```
## 8. Function, return and if/else
```script.js
var quarter = function(number)
{
    return number/4;
}

if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

```
## 9. Functions with two parameters
```script.js
var perimeterBox = function(length, width)
{
    return length*2+width*2;    
}
perimeterBox(5,5)
```
## 10. Global vs Local Variables
```script.js
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);
```
## 11. Functions recap
```script.js
var nameString = function (name) {
	return "Hi, I am " + name;
};
nameString("John");
console.log(nameString);
```
## 12. Functions & if/else
```script.js
var sleepCheck = function(numHours)
{
    if(numHours >= 8)
    {
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else
    {
        return "Get some more shut eye!"; 
    }
}
sleepCheck(10);
sleepCheck(5);
sleepCheck(8);
```
##13.
```script.js
//No code necessary
```
