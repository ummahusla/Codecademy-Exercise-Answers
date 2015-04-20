var TARGET="METHINKS IT IS LIKE A WEASEL";
var ALPHABET = "ABCDEFGHIJKLMONPQRSTUVWXYZ ";
var MUT_PROB = 10;

var generateGenome = function(){
    var genome = [];
    for (var i =0; i<28;++i){
        genome[i]=ALPHABET[Math.floor(Math.random()*ALPHABET.length)];
    }
    return genome.join("");
};

var getFitness = function(genome){
    var fitness=0;
    for (var i=0; i<TARGET.length;++i){
        if (genome[i]===TARGET[i]){
            fitness++;
        }
    }
    return fitness;
};

var getGenePool = function(genome){
    var pool = [];
    for (var i=0; i<50;++i){
        pool[i] = genome;
    }
    return pool;
};

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
var genome = generateGenome();

    var doMutation = function(genome){
        var newGenome = "";
        for (var i=0; i<genome.length;++i){
            if(Math.floor(Math.random()*MUT_PROB)===1){
                if(genome[i]!=TARGET[i]){
                    newGenome+= ALPHABET[Math.floor(Math.random()*ALPHABET.length)];
                }
                else{
                    newGenome+=genome[i];
                }
            }
            else{
                newGenome+=genome[i];
            }
        }
        return newGenome;
    };

    doMutation(genome);

var evolve = function(){
        var numGens = 0;
        var fittest = generateGenome();
        console.log(fittest);

        while(getFitness(fittest)!==28){
            numGens++;
            var pool = getGenePool(fittest);
            var pool2 = [];
            for (var i=0; i<pool.length;++i){
                pool2[i]=doMutation(pool[i],true);
            }
            fittest = getFittest(pool2);
            if(numGens%10===0){
                console.log(fittest);

            }
        }
        return fittest;
    };

evolve();
