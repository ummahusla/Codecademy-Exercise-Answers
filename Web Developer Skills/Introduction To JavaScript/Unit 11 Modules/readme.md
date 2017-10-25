## 1. Hello Modules
```javascript
// ATTENTION: We do not advise the copy of a whole answer of some
//            of the exercises, since (maybe) some snippet of the
//            answer might need to be deleted in order to the codecademy
//            platform recognize the answer, of a first step, as right.
 no code is necessary 
```
## 2. module.exports
```javascript
let Airplane = {};
Airplane['myAirplane']='StarJet'
module.exports=Airplane;
```
## 3. require()
```javascript
const Airplane = require('./1-airplane.js');
function displayAirplane(){console.log(Airplane.myAirplane)};
displayAirplane();
```
## 4. module.exports II
```javascript
###2-airplane.js
let Airplane={};

module.exports={
  myAirplane:"CloudJet",
  displayAirplane:function(){
  return this.myAirplane;
  }
};
//###2-missionControl.js
const Airplane=require('./2-airplane.js');

console.log(Airplane.displayAirplane());
```
## 5. export default
```javascript
 let first={name:'AeroJet',fuelCapacity:800,availableStaff:['pilots','flightAttendants','engineers','medicalAssistance','sensorOperators'],maxSpeed:1200,minSpeed:300}
let second={name:'SkyJet',fuelCapacity:500,availableStaff:['pilots','flightAttendants'],maxSpeed:800,minSpeed:200}
export let availableAirplanes=[first,second];

export let flightRequirements={requiredStaff:4,requiredSpeedRange:700};

export function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length >= requiredStaff)
{return true}
  else{return false}
}

function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){return true}else{return false};
}

export default meetsSpeedRangeRequirements;

//export {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
```
## 6. import
```javascript
//import {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs,meetsSpeedRangeRequirements as meetsSpeedRangeReqs} from './airplane';

// import {aircrafts,flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

import{availableAirplanes,flightRequirements,meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity(){  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name +': '+element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange));
  }
                         );
}

displayStaffStatus();
displaySpeedRangeStatus();
```
## 7. Named Exports
```javascript
 let first={name:'AeroJet',fuelCapacity:800,availableStaff:['pilots','flightAttendants','engineers','medicalAssistance','sensorOperators'],maxSpeed:1200,minSpeed:300}
let second={name:'SkyJet',fuelCapacity:500,availableStaff:['pilots','flightAttendants'],maxSpeed:800,minSpeed:200};

export let availableAirplanes=[first,second];

export let flightRequirements={requiredStaff:4,requiredSpeedRange:700};

export function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length >= requiredStaff)
{return true}
  else{return false}
}

function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){return true}else{return false};
}

export default meetsSpeedRangeRequirements;

//export {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
```
## 8. Named Imports
```javascript
//import {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs,meetsSpeedRangeRequirements as meetsSpeedRangeReqs} from './airplane';

// import {aircrafts,flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

import{availableAirplanes,flightRequirements,meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity(){  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name +': '+element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange));
  }
                         );
}

displayStaffStatus();
displaySpeedRangeStatus();
```
## 9. Export Named Exports
```javascript
 let first={name:'AeroJet',fuelCapacity:800,availableStaff:['pilots','flightAttendants','engineers','medicalAssistance','sensorOperators'],maxSpeed:1200,minSpeed:300}
let second={name:'SkyJet',fuelCapacity:500,availableStaff:['pilots','flightAttendants'],maxSpeed:800,minSpeed:200}
export let availableAirplanes=[first,second];

export let flightRequirements={requiredStaff:4,requiredSpeedRange:700};

export function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length >= requiredStaff)
{return true}
  else{return false}
}

function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){return true}else{return false};
}

export default meetsSpeedRangeRequirements;

//export {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
```
## 10. Import Named Imports
```javascript
//import {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs,meetsSpeedRangeRequirements as meetsSpeedRangeReqs} from './airplane';

// import {aircrafts,flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

import{availableAirplanes,flightRequirements,meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity(){  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name +': '+element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange));
  }
                         );
}

displayStaffStatus();
displaySpeedRangeStatus();
```
## 11. Export as
```javascript
 let first={name:'AeroJet',fuelCapacity:800,availableStaff:['pilots','flightAttendants','engineers','medicalAssistance','sensorOperators'],maxSpeed:1200,minSpeed:300}
let second={name:'SkyJet',fuelCapacity:500,availableStaff:['pilots','flightAttendants'],maxSpeed:800,minSpeed:200}
export let availableAirplanes=[first,second];

export let flightRequirements={requiredStaff:4,requiredSpeedRange:700};

export function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length >= requiredStaff)
{return true}
  else{return false}
}

function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){return true}else{return false};
}

export default meetsSpeedRangeRequirements;

//export {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
```
## 12. Import as
```javascript
//import {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs,meetsSpeedRangeRequirements as meetsSpeedRangeReqs} from './airplane';

// import {aircrafts,flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

import{availableAirplanes,flightRequirements,meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity(){  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name +': '+element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange));
  }
                         );
}

displayStaffStatus();
displaySpeedRangeStatus();
```
## 13. Combining Export Statements 
```javascript
 let first={name:'AeroJet',fuelCapacity:800,availableStaff:['pilots','flightAttendants','engineers','medicalAssistance','sensorOperators'],maxSpeed:1200,minSpeed:300}
let second={name:'SkyJet',fuelCapacity:500,availableStaff:['pilots','flightAttendants'],maxSpeed:800,minSpeed:200}
export let availableAirplanes=[first,second];

export let flightRequirements={requiredStaff:4,requiredSpeedRange:700};

export function meetsStaffRequirements(availableStaff,requiredStaff){
  if (availableStaff.length >= requiredStaff)
{return true}
  else{return false}
}

function meetsSpeedRangeRequirements(maxSpeed,minSpeed,requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange){return true}else{return false};
}

export default meetsSpeedRangeRequirements;

//export {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
```
## 14. Combining Import Statements 
```javascript
//import {availableAirplanes as aircrafts,flightRequirements as flightReqs,meetsStaffRequirements as meetsStaffReqs,meetsSpeedRangeRequirements as meetsSpeedRangeReqs} from './airplane';

// import {aircrafts,flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

import{availableAirplanes,flightRequirements,meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity(){  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name +': '+element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
  });
}

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function(element){
    console.log(element.name+ 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange));
  }
                         );
}

displayStaffStatus();
displaySpeedRangeStatus();
```
## 15. Review
```javascript
  no code necessary 
```
