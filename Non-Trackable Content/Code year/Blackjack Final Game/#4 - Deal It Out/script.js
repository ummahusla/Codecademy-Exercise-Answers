function Card(s, n) {
	var number = n;
	var suit = s;
	this.getNumber = function(){
		return number;
	};
	console.log("Card is a " + n + " of " + s);
}


var deal = function(){
        var suit = Math.floor(Math.random()*4 + 1);
        var rank = Math.floor(Math.random()*13 + 1);
        return new Card(suit, rank);
};


var getValue = function(n){
	if(n >= 10){
		return 10;
	}
	else if(n === 1){
		return  11;
	}
	else {
		return n;
	}
};
