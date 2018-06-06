##2. Global Scope
```sky.js
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
```

##3. Global Scope II
```sky.js
const satellite = 'The Moon';
const galaxy = 'The Milky Way';v

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);
```

##4. Block Scope
```light.js
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
};

visibleLightWaves();
console.log(lightWaves);
```

##5. Block Scope II
```light.js
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

##6. Block Scope III
```starCount.js
const starCount = () => {
  let i = 5;
  console.log(i);
  for (let i = 0; i < 12; i++ ) {
    console.log(i); // All numbers from 0 to 11
  }
};

starCount();
console.log(i);
```
