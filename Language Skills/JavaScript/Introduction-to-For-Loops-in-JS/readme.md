##1. Why use for loops?
```script.js
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
```
##2. First for loop
```script.js
for (var counter = 1; counter < 11; counter++) 
{
	console.log(counter);
}
```
##3. Starting the for loop
```script.js
// Change where the for loop starts.

for (var i = 5; i < 11; i = i + 1){
	console.log(i);
}
```
##4. Ending the for loop
```script.js
// Edit this for loop

for (var i = 4; i < 24; i = i + 1) {
	console.log(i);
}
```
##5. Controlling the for loop
```script.js
for (var i = 5; i < 51; i+=5)
{
	console.log(i);
}
```
##6. How does it work?
```script.js
for (var i = 8 ; i < 120; i+=12) 
{
	console.log(i);
}
```
##7. Practice counting down
```script.js
// Example of infinite loop. THIS WILL CRASH YOUR
// BROWSER. Don't run the code without changing it!

for (var i = 10; i >= 0; i--) {
	console.log(i);
}
```
##8. Last practice for loop
```script.js
for(var i=100; i>0; i-=5)
{
 console.log(i);
}
```
##9. Meet arrays
```script.js
var junk = ["Bunk","Trunk",4,6];
console.log(junk)
```
##10. Array positions
```script.js
var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3])
```
##11. Loops and arrays I
```script.js
var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Boston", "Chicago"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
```
##12. Loops and arrays II
```script.js
var names = ["Steven","Jacob","Brent","Jack","John"];
for(var i=0; i < 5;i++)
{
    console.log("I know someone called " + names[i])
}
```
##13. Conclusion
```script.js
//No code necessary
```
