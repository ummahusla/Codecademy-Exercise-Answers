/*jshint multistr:true */

text = "Blah blah blah blah blah blah blen \
blah blah blah Edvin blah blah vin blah blah \
blah blah blah blah blah ef bla ffrn";
myName = "Edvin";
hits = [];

for(var i = 0; i < text.length; i++) { 
		if (text[i] == "E"){
		for(var j = i; j < (myName.length + i); j++){
			hits.push(text[j]);
			}	
		}
}
if (hits.length === 0){
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}