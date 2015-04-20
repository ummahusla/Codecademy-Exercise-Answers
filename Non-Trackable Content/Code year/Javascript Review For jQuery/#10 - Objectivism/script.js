//The typeof keyword gives the type of something

A = "object";
B = "string";
C = "function";
D = "number";

// fill the following variables with the type of the
// given object
// you can run the code to have the alerts pop up with the answers

//1)
var thingOne = {'key':'value'};
alert(typeof thingOne);
var typeOfThingOne = A;//A or B or C or D

//2)
var thingTwo = [5,3,23];
alert(typeof thingTwo);
var typeOfThingTwo = A;//A or B or C or D

//3) **this is jQuery!
var thingThree = $();
alert(typeof thingThree);
var typeOfThingThree = A;//A or B or C or D
