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
## 6. Adding a Property
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

person.hobbies=['Counter-strike','JavaScript']

console.log(person.hobbies)
```
## 7. Editing a Property
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

person.hobbies=['Counter-strike','JavaScript']

console.log(person.hobbies)

person.hobbies=['Kidding. Only Counter-strike']

console.log(person.hobbies)
```
## 8. Methods
```javascript
let person = {name:"Luiz",
             age:28,
             weekendAlarm:'No alarms needed',
             weekAlarm:'Alarm set to 7AM',
             
             sayHello: () => {return 'Hello, there!'}
             }

console.log(person['name'])
console.log(person['age'])

var day='Monday'
let alarm

if (day === 'Saturday' || day === 'Sunday') {
  alarm='weekendAlarm';
} else {alarm='weekAlarm'};

console.log(person[alarm])

person.hobbies=['Counter-strike','JavaScript']

console.log(person.hobbies)

person.hobbies=['Kidding. Only Counter-strike']

console.log(person.hobbies)

console.log(person.sayHello())
```
## 9. Methods:ES6
```javascript
let person = {name:"Luiz",
             age:28,
             weekendAlarm:'No alarms needed',
             weekAlarm:'Alarm set to 7AM',
             
             sayHello: () => {return 'Hello, there!'},
              
             sayGoodbye(){return 'Goodbye!'}
             }

console.log(person['name'])
console.log(person['age'])

var day='Monday'
let alarm

if (day === 'Saturday' || day === 'Sunday') {
  alarm='weekendAlarm';
} else {alarm='weekAlarm'};

console.log(person[alarm])

person.hobbies=['Counter-strike','JavaScript']

console.log(person.hobbies)

person.hobbies=['Kidding. Only Counter-strike']

console.log(person.hobbies)

console.log(person.sayHello())

console.log(person.sayGoodbye())
```
## 10. The this Keyword I
```javascript
let person = {name:"Luiz",
             age:28,
             weekendAlarm:'No alarms needed',
             weekAlarm:'Alarm set to 7AM',
             
             sayHello(){return 'Hello, my name is '+this.name},
              
             sayGoodbye(){return 'Goodbye!'}
             }

console.log(person['name'])
console.log(person['age'])

var day='Monday'
let alarm

if (day === 'Saturday' || day === 'Sunday') {
  alarm='weekendAlarm';
} else {alarm='weekAlarm'};

console.log(person[alarm])

person.hobbies=['Counter-strike','JavaScript']

console.log(person.hobbies)

person.hobbies=['Kidding. Only Counter-strike']

console.log(person.hobbies)

console.log(person.sayHello())

console.log(person.sayGoodbye())
```
## 11. The this Keyword II
```javascript
let person = {name:"Luiz",
             age:28,
             weekendAlarm:'No alarms needed',
             weekAlarm:'Alarm set to 7AM',
             
             sayHello(){return 'Hello, my name is '+this.name},
              
             sayGoodbye(){return 'Goodbye!'}
             }

let friend = {name:'Lucas'}

friend.sayHello = person.sayHello;

console.log(friend.sayHello())
```
## 12. Getters and Setters I
```javascript
let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(input){
    if(typeof input === 'number'){this._age=input}
    else{console.log('Invalid input')}
  }
};
```
## 13. Getters and Setters II 
```javascript
let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(input){
    if(typeof input === 'number'){this._age=input}
    else{console.log('Invalid input')}
  }
};

person.age='Thirty-nine';
person.age=39;
```
## 14. Getters and Setters III
```javascript
let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(input){
    if(typeof input === 'number'){this._age=input}
    else{console.log('Invalid input')}
  },
  
  get age(){
    console.log(`${this._name} is ${this._age} years old.`)
  }
};

console.log(person.age)
```
