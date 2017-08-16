##2. Functions
```pizza.js
function takeOrder() {
  console.log('Order: pizza');
};
takeOrder();
```
##3. Parameters
```pizza.js
function takeOrder(topping) {
  console.log('Order: pizza topped with ' + topping);
};
takeOrder('bacon');
```
##4 Parameters II
```pizza.js
function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};
takeOrder('bacon', 'thin crust');
takeOrder('salami', 'thick crust');
takeOrder('cheese', 'no crust');
```
##5 return
```pizza.js
var orderCount = 0

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

function getSubTotal(itemCount) {
  return itemCount * 7.5
};

takeOrder('bacon', 'thin crust');
takeOrder('salami', 'thick crust');
takeOrder('cheese', 'no crust');
console.log(getSubTotal(orderCount))
```
##6. return II
```pizza.js
var orderCount = 0

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

function getSubTotal(itemCount) {
  return itemCount * 7.5
};

function getTax() {
  return getSubTotal(orderCount) * 0.06
};

function getTotal() {
  return getSubTotal(orderCount) + getTax();
};

takeOrder('bacon', 'thin crust');
takeOrder('salami', 'thick crust');
takeOrder('Cheese', 'no crust');
console.log(getSubTotal(orderCount))
console.log(getTotal());
```
