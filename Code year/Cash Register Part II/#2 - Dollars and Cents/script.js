var cashRegisterWithChange = {
	total: 0,
	change: 0,
    setTotal: function (amount) {
		this.total = amount;
	},
	getPaid: function (amountPaid) {
		if (this.total > amountPaid) {
			console.log ("Not enough!");
		} else {
            this.change = amountPaid - this.total;
			console.log ("Give them:");

			//this line will change the value of this.change
            var numDollars = this.howManyDollars(this.change);
			console.log (numDollars + " dollar bills");

            //update the change variable for outputting pennies
            this.change -= numDollars;
            this.change =  this.change.toFixed(2);

			//so that here change will tell us the number of pennies
			console.log ("and " + this.change * 100 + " pennies");
			this.change = 0;
		}
	},
	howManyDollars: function(amountOfMoney) {
        if(amountOfMoney < 1){
            return 0;
        }else{
            return 1+this.howManyDollars(amountOfMoney-1);
        }
	}
};

cashRegisterWithChange.setTotal(4.55);
cashRegisterWithChange.getPaid(2);
cashRegisterWithChange.getPaid(6);
