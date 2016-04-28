##1. What You'll be Building

```js
/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}
```

##2. Declare your variables

```js
/*jshint multistr:true */
var text = "Lorem ipsum dolor sit amet, John consectetur adipiscing elit. Praesent quis dictum nulla. Nullam condimentum lacinia turpis a semper.";
var myName = "John";
var hits = [];
```
##3. Your first "for" loop
```script.js
/*jshint multistr:true */
var text = "Lorem ipsum dolor sit amet, John consectetur adipiscing elit. Praesent quis dictum nulla. Nullam condimentum lacinia turpis a semper.";
var myName = "John";
var hits = [];

for(var i =0;i <= text.length; i++)
{
        
}
```

##4. Your "if" statement

```js
/*jshint multistr:true */
var text = "Lorem ipsum dolor sit amet, John consectetur adipiscing elit. Praesent quis dictum nulla. Nullam condimentum lacinia turpis a semper.";
var myName = "John";
var hits = [];

for(var i =0;i <= text.length; i++)
{
    if(text[i] === "J")
    {
            
    }
}
```

##5. Your second "for" loop

```js
/*jshint multistr:true */
 
var text = "Stewart containing some text for Stewart written and developed by Stewart";
 
var myName = "Stewart";
 
var hits = [];
 
/* assign the value of 0 to i and continue to the loop while i is less than the length of the variable 'text', and add 1 to i after executing the code block  */
for (i = 0; i < text.length + 1; i++) {
    /* if the array value of the 'text' variable is equal to the 0 point of the myName variable */
    if(text[i] === myName[0]) {
        /* then assign the value of i to j and continue the loop while j is less than the length of the myName variable plus the value of i */
        for(var j = i; j < (myName.length + i); j++) {
            /* if the array value of the variable 'text' is equal to the array value of j minus i for the 'myName' variable, push the value of j on to the hits array */
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}
 
if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
```

##6. Log it!

```js
/*jshint multistr:true */
 
var text = "Stewart containing some text for Stewart written and developed by Stewart";
 
var myName = "Stewart";
 
var hits = [];
 
/* assign the value of 0 to i and continue to the loop while i is less than the length of the variable 'text', and add 1 to i after executing the code block  */
for (i = 0; i < text.length + 1; i++) {
    /* if the array value of the 'text' variable is equal to the 0 point of the myName variable */
    if(text[i] === myName[0]) {
        /* then assign the value of i to j and continue the loop while j is less than the length of the myName variable plus the value of i */
        for(var j = i; j < (myName.length + i); j++) {
            /* if the array value of the variable 'text' is equal to the array value of j minus i for the 'myName' variable, push the value of j on to the hits array */
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}
 
if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
```

##7. Victory!

```js
/*jshint multistr:true */
 
var text = "Stewart containing some text for Stewart written and developed by Stewart";
 
var myName = "Stewart";
 
var hits = [];
 
/* assign the value of 0 to i and continue to the loop while i is less than the length of the variable 'text', and add 1 to i after executing the code block  */
for (i = 0; i < text.length + 1; i++) {
    /* if the array value of the 'text' variable is equal to the 0 point of the myName variable */
    if(text[i] === myName[0]) {
        /* then assign the value of i to j and continue the loop while j is less than the length of the myName variable plus the value of i */
        for(var j = i; j < (myName.length + i); j++) {
            /* if the array value of the variable 'text' is equal to the array value of j minus i for the 'myName' variable, push the value of j on to the hits array */
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}
 
if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
```
