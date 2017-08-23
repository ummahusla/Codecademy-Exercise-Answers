## 1. Introduction to Classes
```script.js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
```
## 2. Constructor
```script.js
class Surgeon{
  constructor(name,department){
    this.name=name;
    this.department=department;
  };
};
```
## 3. Instance
```script.js
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  };
};

const surgeonCurry = new Surgeon('Curry','Cardiovascular');

const surgeonDurant = new Surgeon('Durant','Orthopedics');
```
## 4. Methods
```script.js
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  };

get name(){
  return this._name;
};

get department(){
  return this._department;
};

get remainingVacationDays(){
  return this._remainingVacationDays;
};

 takeVacationDays(daysOff){
  return this._remainingVacationDays-=daysOff
};

};

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
```
## 5. Method Calls
```script.js
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  };

get name(){
  return this._name;
};

get department(){
  return this._department;
};

get remainingVacationDays(){
  return this._remainingVacationDays;
};

 takeVacationDays(daysOff){
  return this._remainingVacationDays-=daysOff
};

};

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);

surgeonCurry.takeVacationDays(3);

console.log(surgeonCurry.remainingVacationDays);
```
## 6. Inheritance I
```script.js
(nothing)
```
## 7. Inheritance II
```script.js
class HospitalEmployee{
    constructor(name){
      this._name=name
      this._remainingVacationDays=20
    };
  
  get name(){
    return this._name;
  };
  
  get remainingVacationDays(){
    return this._remainingVacationDays;
  };
  
  takeVacationDays(daysOff){
    return this._remainingVacationDays -= daysOff;
  };

};
```
## 8. Inheritance III
```script.js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications){
    super(name);
  this._certifications=certifications;
  }
};

const nurseOlynyk= new Nurse('Olynyk',['Trauma','Pediatrics']);
```
## 9. Inheritance IV
```script.js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);
```
## 10. Inheritance V
```script.js


class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications(){
    return this._certifications;
  };
  
  addCertification(newCertification){
    this._certifications.push(newCertification);
  };
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
```
