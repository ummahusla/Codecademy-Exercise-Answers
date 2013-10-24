var TARGET = "METHINKS IT IS LIKE A WEASEL";
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ  ";
var MUT_PROB = 10;
var genome = generateGenome();
var pool = getGenePool(genome);

function generateGenome(){
    var genome = [];
    for (var i=0; i<28;++i){
        genome[i]=ALPHABET[Math.floor(Math.random()*ALPHABET.length)];
    }
    return genome.join("");
}

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

getFitness(genome);
var getFittest = function(pool){
        var fittestLoc = 0;
        var fittest = 0;
        for (var i=0; i<pool.length;++i){
            if (getFitness(pool[i]) >fittest){
                fittest = getFitness(pool[i]);
                fittestLoc = i;
            }
        }
        return pool[fittest];
    };

    getFittest(pool);
