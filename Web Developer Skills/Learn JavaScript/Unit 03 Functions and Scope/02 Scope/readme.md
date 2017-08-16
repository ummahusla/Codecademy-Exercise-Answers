##1. Global Scope
```scope.js
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

console.log('Laundry: ' + laundryRoom +  ', Mail: ' + mailRoom);
```
##2. Functional scope
```scope.js
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment() {
  var mailBoxNumber = 'Box 3';
  var laundryRoom = 'In-unit';
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
};

console.log('Laundry: ' + laundryRoom +  ', Mail: ' + mailRoom);
console.log(myApartment());
```
##3 Scoping
```apartment.js
var buildingAddress = '150 E 14th St, New York, NY';
var buildingLaundryCode = 4927;
var buildingPhone = '(481) 516-2342';

function myApartment() {
	var myCoffeeMaker = 'Aeropress';
	var myCloset = 'Extra coats in the back';
	var myRefridgerator = 'Filled with veggies and dark chocolate.';
	var myDog = 'Nikko';
}








// Do not edit the code after this line
console.log("**Apartment Building Information**");
console.log("Laundry code: " + buildingLaundryCode + "\nPhone: " + buildingPhone + "\nMailing address: " + buildingAddress);
```
