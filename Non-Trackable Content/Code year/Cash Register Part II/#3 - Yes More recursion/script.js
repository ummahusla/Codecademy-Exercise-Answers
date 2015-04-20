var change = 0;
function howManyQuarters(howMuchMoney) {
    if (howMuchMoney < 0.25){
        change = howMuchMoney;
        return 0;
    }else{
        return 1+this.howManyQuarters(howMuchMoney-0.25);
    }
}
change = 0.99;
console.log ("Pay out " + howManyQuarters(change) + " quarters");
console.log ("And you'll have " + change * 100 + " pennies left over");
