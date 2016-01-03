##1. You know this! 
```script.js
var list = ["Bread", "Milk", "Peanut Butter"];
```
##2. Access by offset
```script.js
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages[2]);

```
##3. Array Properties
```script.js
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages[2]);
console.log(languages.length);
```
##4. Iterating over an array
```script.js
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
for(var counter = 0; counter<5;counter++)
{
    console.log(languages[counter])
}

```
##5. Heterogeneous arrays
```script.js
var myArray = [010101100110,false,"Test"];
```
##6. Arrays of arrays
```script.js
var newArray = [[1,2,3],[4,5,6],[7,8,9]];
```
##7. Jagged arrays
```script.js
var jagged = [[15,67,82],[56,45]];
```
##8. Mid-lesson breather
```script.js
//No code necessary
```
##9. Nouns and verbs together
```script.js
var phonebookEntry = {};
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();
```
##10. Object Syntax
```script.js
var me =
{
    name: "John",
    age: 100
}
```
##11. Creating a new object
```script.js
var me = new Object();
me.name = "John";
me.age = 100;
```
##12. Practice makes perfect
```script.js
var object1 = new Object();
var object2 = new Object();
var object3 = new Object();

object1.name = "Object One"
object2.name = "Object Two"
object3.name = "Object Three"
```
##13. Review
```script.js
//No code necessary
```
##14. Heterogenous arrays
```script.js
var myArray = [15,true,"John",myObj];
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};
```
##15. Multidimensional arrays
```script.js
var newArray = [[15,67,81],[myObj, 17]];
var myObj =
{
    name: 'John',
    Relationship: 'Friend'
};
```
##16. Editing an existing object 
```script.js
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ['Sailing','Skiing','Programming']
  
};
```
##17. Creating your own objects
```script.js
var myOwnObject = new Object();
myOwnObject.name = "John G";
myOwnObject.gender = "Male";
myOwnObject.number = "555-555-555";
```