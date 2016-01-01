##1. While we're at it
```script.js
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
```
##2. While syntax
```
var understand = true;

while(understand === true){
	console.log("I'm learning while loops!");
	understand = false;
}
```
##3. A fellow of infinite loops
```
understand = true;

while(understand){
	console.log("I'm learning while loops!");
	understand = false;
}
```
##4. Brevity is the soul of programming
```
var bool = true;
while(bool){
    console.log("Less is more!");
    bool = false;
}
```
##5. Practice makes perfect
```
var loop = function(){
var count = 0;
	while(count < 3){
		console.log("I'm looping!");
		count++
	}
};
loop();
```
##6. Solo flight
```
var swag = true;
var soloLoop = function(){
  while(swag === true) {
      console.log("Looped once!");
      swag = false;
  }
};

soloLoop();
```
##7. Mid-lesson Breather
```
//No code necessary
```
##8. When to 'while' and when to 'for'
```
var count = 1;

while(count < 10) {
    count++;
    console.log("This is a for loop and the count is...");
    console.log("The count is " + count);
}
for(;count < 10;) {
   count++;
   console.log("This is a for loop and the count is...");
   console.log("The count is " + count);
}
```
##9. The 'do'/'while' loop
```
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
```
##10. To learn it, you gotta 'do' it
```
var count = 1;
var getToDaChoppa = function(){
do{
  console.log("Welcome to 'Nam");
  count++;
} while(count<2);
};

getToDaChoppa();
```
##11. Review
```
for(var count = 1; count<2;count++) {
    console.log("Hello, world!")
}
do{
    console.log("Hello, world!")
    count++;
} while(count<2);
```