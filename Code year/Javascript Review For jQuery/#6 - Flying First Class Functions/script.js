
//this function adds 3 to the number passed in
function addThree(x) {
    return x + 3;
}

//this function takes a function and returns
//a function that runs the function it was passed,
//and then runs that function _again_ on the return
//value of the first call to the function.
//make sense? look at it until it does.
function composed(func) {
    return function(x) {
        return func(func(x))
    }
}

composed(addThree)(4);
//what does that return?
var answer = 10;
