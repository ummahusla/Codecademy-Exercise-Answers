var TARGET = "METHINKS IT IS LIKE A WEASEL";
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ  ";
var MUT_PROB = 10;

function generateGenome(){
    var genome = [];
    for (var i=0; i<28;++i){
        genome[i]=ALPHABET[Math.floor(Math.random()*ALPHABET.length)];
    }
    return genome.join("");
}
