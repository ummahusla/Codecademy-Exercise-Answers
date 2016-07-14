##1. Confirm
```script.js
confirm("Ready player one?");
```
##2. Old enough to play?
```script.js
confirm("Ready player one?");
var age = prompt("What's your age?");
if(age < 13)
{
    console.log("You may play, however we assume no responsibilty for the content of our game.")
}
else
{
    console.log("Play on peasant!");
}
```
##3. Adding some story
```script.js
confirm("Ready player one?");
var age = prompt("What's your age?");
if(age < 13)
{
    console.log("You may play, however we assume no responsibilty for the content of our game.")
}
else
{
    console.log("Play on peasant!");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
```
##4. First Move!
```script.js
confirm("Ready player one?");
var age = prompt("What's your age?");
if(age < 13)
{
    console.log("You may play, however we assume no responsibilty for the content of our game.");
}
else
{
    console.log("Game on!");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
userAnswer = prompt("Do you want to race Bieber on stage?");
```
##5. The Story heats up!
```script.js
confirm("Ready player one?");
var age = prompt("What's your age?");
if(age < 13)
{
    console.log("You may play, however we assume no responsibilty for the content of our game.");
}
else
{
    console.log("Game on!");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
userAnswer = prompt("Do you want to race Bieber on stage?");
if(userAnswer === "Yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")   
}
```
##6. Asking for feedback
```script.js
confirm("Ready player one?");
var age = prompt("What's your age?");
if(age < 13)
{
    console.log("You may play, however we assume no responsibilty for the content of our game.");
}
else
{
    console.log("Game on!");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Bieber on stage?");
if(userAnswer === "Yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")   
}

var feedback = prompt("Please rate my game, one to ten, below!");

if(feedback > 8)
{
    console.log("Thank you! We should race at the next concert!");    
}
else
{
    console.log("I'll keep practicing coding and racing.")    
}
```
##7. Next Steps!
```script.js
confirm("Ready player one?");
var age = prompt("What's your age?");
if(age < 13)
{
    console.log("You may play, however we assume no responsibilty for the content of our game.");
}
else
{
    console.log("Game on!");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Bieber on stage?");
if(userAnswer === "Yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")   
}

var feedback = prompt("Please rate my game, one to ten, below!");

if(feedback > 8)
{
    console.log("Thank you! We should race at the next concert!");    
}
else
{
    console.log("I'll keep practicing coding and racing.")    
}
```
