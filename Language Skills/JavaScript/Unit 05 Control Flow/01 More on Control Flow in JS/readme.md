##1. If/else 
```script.js
var isEven = function(number) {
  if(number % 2 === 0) {
    return true;
  }
  else {
    return false;  
  }
};
```
##2. If/else if/else 
```script.js
var isEven = function(number) {
  if(number % 2 === 0) {
    return true;
  }
  else if(isNaN(number) === true) {
    return "That is not a number, you must input a number!";  
  }
  else {
    return false;  
  }
};
```
##3. For or while
```script.js
for(var counter = 1;counter <= 5;counter++) {
    console.log("This is a for loop");    
}
```
##4. Sneak preview: the switch statement
```script.js
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
```
##5. Adding to an existing switch
```script.js
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("Yellow is okay...") 
    break;
  default:
    console.log("I don't think that's a primary color!");
}
```
##6. Practice with switch
```script.js
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  default:
    console.log("I don't recognize that candy D:");
    break;
}
```
##7. More practice with switch
```script.js
scvar answer = prompt("How are you feeling","Insert Feels Here");

switch(answer) {
  case 'Happy':
    console.log("Yay, I'm happy too!");
    break;
  case 'Sad':
    console.log("Aww, too bad!");
    break;
  case 'Meh':
    console.log("Have a smile to brighten up your day!");
    break;
  default:
    console.log("You're a robot...");
    break;
}
```
##8. All on your own
```script.js
var answer = prompt("What color is #TheDress?");
switch(answer) {
    case 'Blue and Black':
        console.log("Yeah!");
        break;
    case 'Gold and White':
        console.log("No!");
        break;
    case 'It does not Matter':
        console.log("Whatever");
        break;
    default:
        console.log("That's not a valid answer.");
        break;
}
```
##9. Mid-lesson breather
```script.js
var answer = prompt("What color is #TheDress?");
switch(answer) {
    case 'Blue and Black':
        console.log("Yeah!");
        break;
    case 'Gold and White':
        console.log("No!");
        break;
    case 'It does not Matter':
        console.log("Whatever");
        break;
    default:
        console.log("That's not a valid answer.");
        break;
}
```
##10. Overview
```script.js
// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}
```
##11. And
```script.js
var hungry = true;
var foodHere= true;
var eat = function() {
  if(hungry && foodHere){
      return true;
  }
  else{
      return false;  
  }
};
```
##12. Or
```script.js
var tired = true;
var bored = false;
var nap = function() {
  if(tired || bored){
      return true;
  }
  else{
      return false;
  }
}
```
##13. Not
```script.js
var programming = false;
var happy = function() {
  if(programming != false){
    return false;  
  }
  else{
    return true;  
  }
}
```
##14. Review
```script.js
//No code necessary
```
