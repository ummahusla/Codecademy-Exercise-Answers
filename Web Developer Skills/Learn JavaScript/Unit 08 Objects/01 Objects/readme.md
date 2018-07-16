##2. Objects
```main.js
let person = {
  name: 'Tyron',
  age: 40
};
```

##3. Accessing Object Properties I
```main.js
let person = {
  name: 'Tyron',
  age: 40
};

console.log(person.name);
console.log(person.age);
```

##4. Accessing Object Properties II
```main.js
let person = {
  name: 'Tyron',
  age: 40
};

console.log(person['name']);
console.log(person['age']);
```

##5. Accessing Object Properties III
```main.js
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
```

##6. Adding a Property
```main.js
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['Basketball', 'Gaming'];
console.log(person.hobbies);

console.log(person['name']);
console.log(person['age']);
```

##7. Editing a Property
```main.js
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['Basketball', 'Gaming'];
person.hobbies = ['Coding'];
console.log(person.hobbies);
```

##8. Methods
```main.js
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => { return 'Hello, there!'; }
};

person.hobbies = ['Basketball', 'Gaming'];
person.hobbies = ['Coding'];
console.log(person.hobbies);

console.log(person['name']);
console.log(person['age']);
console.log(person.sayHello());
```

##9. Methods: ES6
```main.js
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => { return 'Hello, there!'; },
  
  sayGoodbye() {
  	return 'Goodbye!';
  }
};

console.log(person.sayHello());
```

##10. The this Keyword I
```main.js
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => { return `Hello, my name is ${this.name}`; },
  sayGoodbye() {
  	return 'Goodbye!';
  }
};

console.log(person.sayHello());
```

##11. The this Keyword II
```main.js
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello() { return `Hello, my name is ${this.name}`; },
  sayGoodbye() {
  	return 'Goodbye!';
  }
};

let friend = {
  name: 'Tom'
};

friend.sayHello = person.sayHello;

console.log(person.sayHello());
console.log(friend.sayHello());
```

##12. Getters and Setters I
```main.js
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  }
};
```

##13. Getters and Setters II
```main.js
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  }
};

person.age = 'Thirty-nine';
person.age = 39;
```

##14. Getters and Setters III
```main.js
let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};

person.age = 'Thirty-nine';
person.age = 39;
```