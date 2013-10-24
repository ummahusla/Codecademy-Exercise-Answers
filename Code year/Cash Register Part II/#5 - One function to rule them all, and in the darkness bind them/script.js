
function howManyCoins (coinName, coinAmount, coinsSoFar) {
    //fill this in
    if (change < coinAmount) {
        console.log (coinsSoFar + " " + coinName);
    } else {
//      first convert incoming change amount
        change = change.toFixed(4);
        change -= coinAmount;
//      Don't convert incoming change amount -- This calc fails for small numbers
//        change -= coinAmount;
        return howManyCoins(coinName, coinAmount, coinsSoFar + 1);
    }
}

function howManyCoinsTest (changeAmount) {
    this.change = changeAmount;

    console.log("Give them:");
    howManyCoins("dollar bills", 1.00, 0);
    howManyCoins("quarters", 0.25, 0);
    howManyCoins("dimes", 0.10, 0);
    howManyCoins("nickels", 0.05, 0);
// altered value of penny
//    howManyCoins("pennies", 0.009999, 0);
    howManyCoins("pennies", 0.01, 0);

    console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2));}

howManyCoinsTest (4.94);
//howManyCoinsTest (0.04);
