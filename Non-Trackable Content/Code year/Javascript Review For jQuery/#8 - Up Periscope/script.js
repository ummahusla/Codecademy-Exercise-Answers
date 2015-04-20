var a = 3;
var b = 2;

function line(x) {
    var a = 5;
    var b = 4;
    return a*x + b;
}

//b should be 17
b = line(a) - b;
alert(b);

//c should be 36
c = line(a) + b;
alert(c);
