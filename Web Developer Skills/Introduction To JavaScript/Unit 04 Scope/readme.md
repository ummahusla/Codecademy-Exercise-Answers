## 1. Scope
```javascript
// No code necessary
//```
## 2. Global Scope
```javascript
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);
```
## 3. Global Scope II
```javascript
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);
```
## 4. Block Scope
```javascript
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

visibleLightWaves();
```
## 5. Block Scope II
```javascript
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

visibleLightWaves();
```
## 6. Block Scope III
```javascript
const starCount = () => {
  let i = 5;
  console.log(i);
  for (i = 0; i < 12; i++) {
    console.log(i);
  }
};

starCount();

console.log(i);
```
## 7. Review: Scope
```javascript
// no code necessary
```
