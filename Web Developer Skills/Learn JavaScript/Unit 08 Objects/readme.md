## 1. Introduction to JavaScript Objects
```javascript
 // no code is necessary 
```
## 2. Objects
```javascript
let person = {name:"Luiz",
             age:28}
```
## 3. Acessing Object Properties I
```javascript
let person = {name:"Luiz",
             age:28}

console.log(person.name)
console.log(person.age)
```
## 4. Acessing Object Properties II
```javascript
let person = {name:"Luiz",
             age:28}

console.log(person['name'])
console.log(person['age'])
```
## 5. Acessing Object Properties III
```javascript
let person = {name:"Luiz",
             age:28,
             weekendAlarm:'No alarms needed',
             weekAlarm:'Alarm set to 7AM'}

console.log(person['name'])
console.log(person['age'])

var day='Monday'
let alarm

if (day === 'Saturday' || day === 'Sunday') {
  alarm='weekendAlarm';
} else {alarm='weekAlarm'};

console.log(person[alarm])
```
