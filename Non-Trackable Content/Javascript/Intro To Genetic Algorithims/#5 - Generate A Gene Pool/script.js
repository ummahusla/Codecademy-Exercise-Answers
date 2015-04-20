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
var genome = generateGenome();

var getGenePool = function(genome){
    var pool = [];
    for (var i=0;i<50;i++){
        pool[i] = genome;
    }
    return pool;
};
getGenePool(genome);

function getFitness(genome){
    var fitness = 0;
    for (var i=0;i<TARGET.length;i++){
        if (genome[i]===TARGET[i]){
            fitness++;
        }
    }
    return fitness;
}
console.log(pool)
getFitness(genome);
