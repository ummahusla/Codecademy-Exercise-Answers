##1. The Game
```script.js
//No code necessary
```
##2. User Choice
```script.js
var userChoice = prompt("Do you choose rock, paper or scissors?");
```
##3. Computer Choice: Part 1
```script.js
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);
```
##4. Computer Choice: Part 2
```script.js
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

//ComputerChoice Random Number to Selection Conversion Statements
if(computerChoice <= 0.33)
{
    computerChoice = "rock";
}
else if(computerChoice <= 0.66)
{
    computerChoice = "paper";
}
else
{
    computerChoice = "scissors";
}
```
##5. Both choices are the same!
```script.js
/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);*/

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";       
    }
}
```
##6. What if choice1 is rock?
```script.js
/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);*/

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";       
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";   
        }
    }
}
```
##7. What if choice1 is paper?
```script.js
/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);*/

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";       
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        } else
        {
            return "paper wins";   
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";    
        }
    }
}
```
##8. What if choice1 is scissors?
```script.js
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

compare(userChoice, computerChoice);

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";       
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";   
        }
    }
    else if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";    
        }
    }
}


```
##9. Next Steps
```script.js
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

compare(userChoice, computerChoice);

var compare = function(choice1, choice2)
{
    if(choice1 === choice2)
    {
        return "The result is a tie!";       
    }
    else if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";   
        }
    }
    else if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";    
        }
    }
}
```
