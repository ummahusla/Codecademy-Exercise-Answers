var calculateTotalCosts = function(salary,numWorkers,city){
				fixedCosts = 5000;
				variableCosts = salary*numWorkers;
				switch(city)
				{
								case "BEJ":
												rent = 25000;
												break;
								case "NYC":
												rent = 30000;
												break;
								default:
												rent = 10000;
												break;
				}
				return rent + variableCosts + fixedCosts;
};
console.log(calculateTotalCosts(50000, 9, "NYC"));
console.log(calculateTotalCosts(50000, 9, "BEJ"));
console.log(calculateTotalCosts(50000, 9, "MUM"));
