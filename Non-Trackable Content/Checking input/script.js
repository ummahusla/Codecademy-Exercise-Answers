var userAge = parseInt(prompt("What's your age?"),10);
if (isNaN(userAge)) {
	console.log("It looks like you didn't enter a number.");
} else if (userAge < 13) {
	console.log("Sorry, you have to be 13 or older to use this website!");
} else {
	console.log("You're " + userAge + " years old? Go ahead!");
}