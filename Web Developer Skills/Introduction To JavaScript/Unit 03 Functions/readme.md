## 1. Introduction to Functions
```javascript
let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.
```
## 2. Functions
```javascript
let orderCount=0

const takeOrder = (topping,crustType) => {
  
  orderCount=orderCount+1
  console.log('Order: '+crustType+' pizza topped with '+topping);
};

const getSubTotal = (itemCount) => {
  return itemCount*7.5
};

function getTax() {
  return getSubTotal(orderCount) * 0.06
};

const getTotal = () => {
  return  getSubTotal(orderCount)+getTax()
};

takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');

console.log(getTotal());
```
## 3. Parameters
```javascript
let orderCount=0

const takeOrder = (topping,crustType) => {
  
  orderCount=orderCount+1
  console.log('Order: '+crustType+' pizza topped with '+topping);
};

const getSubTotal = (itemCount) => {
  return itemCount*7.5
};

function getTax() {
  return getSubTotal(orderCount) * 0.06
};

const getTotal = () => {
  return  getSubTotal(orderCount)+getTax()
};

takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');

console.log(getTotal());
```
## 4. Parameters II
```javascript
let orderCount=0

const takeOrder = (topping,crustType) => {
  
  orderCount=orderCount+1
  console.log('Order: '+crustType+' pizza topped with '+topping);
};

const getSubTotal = (itemCount) => {
  return itemCount*7.5
};

function getTax() {
  return getSubTotal(orderCount) * 0.06
};

const getTotal = () => {
  return  getSubTotal(orderCount)+getTax()
};

takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');

console.log(getTotal());
```
## 5. Return
```javascript
let orderCount=0

const takeOrder = (topping,crustType) => {
  
  orderCount=orderCount+1
  console.log('Order: '+crustType+' pizza topped with '+topping);
};

const getSubTotal = (itemCount) => {
  return itemCount*7.5
};

function getTax() {
  return getSubTotal(orderCount) * 0.06
};

const getTotal = () => {
  return  getSubTotal(orderCount)+getTax()
};

takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');

console.log(getTotal());
```
## 6. Return II
```javascript
let orderCount=0

const takeOrder = (topping,crustType) => {
  
  orderCount=orderCount+1
  console.log('Order: '+crustType+' pizza topped with '+topping);
};

const getSubTotal = (itemCount) => {
  return itemCount*7.5
};

function getTax() {
  return getSubTotal(orderCount) * 0.06
};

const getTotal = () => {
  return  getSubTotal(orderCount)+getTax()
};

takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');
takeOrder('Mushrooms.','thin');

console.log(getTotal());
```
## 7. Function Declarations
```javascript
const isGreaterThan = (numberOne,numberTwo) => {
  if (numberOne > numberTwo){return true}else{return false};
};

isGreaterThan(2,3);
```
## 8. Function Expressions
```javascript
const isGreaterThan = (numberOne,numberTwo) => {
  if (numberOne > numberTwo){return true}else{return false};
};

isGreaterThan(2,3);
```
## 9. Arrow Functions
```javascript
const volumeOfSphere = diameter => 
  (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
```
## 10. Review Functions
```javascript
// no code necessary
```
