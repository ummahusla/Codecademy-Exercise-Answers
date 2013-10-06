var slaying = true;
var youHit = Math.random(0,1);
var damageThisRound = Math.floor(1,6);
var totalDamage = totalDamage += damageThisRound;

while (slaying) {
  if (youHit) {
      console.log("You hit!");
      totalDamage += damageThisRound;
          if (totalDamage >= 4) {
              console.log("You win!");
              slaying = false;
          } else {
              youHit = Math.floor(Math.random() * 2);
          }
  } else {
      console.log("You lose!");
      slaying = false;
  }
}