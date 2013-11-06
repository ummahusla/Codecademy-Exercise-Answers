var cashRegisterWithChange = {
    total: 0,
    setTotal: function (amount) {
        this.total = amount;
    },
    getPaid: function (amountPaid) {
        if (amountPaid<this.total){console.log("Not enough!");}
        else {
            var change= amountPaid-this.total;
            change=change.toFixed(2);
            console.log(change*100+" pennies");
        }
    }
};

//some tests - you should see the following output:
//  Not enough!
//  45 pennies
cashRegisterWithChange.setTotal(2.55);
cashRegisterWithChange.getPaid(2);
cashRegisterWithChange.getPaid(3);
