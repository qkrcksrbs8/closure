var outer = function () {
    var a = 1;
    console.log(a);
    var inner = function () {
        return ++a;
    }
    return inner;
}

var outer2 = outer();

console.log(outer2());
console.log(outer2());
