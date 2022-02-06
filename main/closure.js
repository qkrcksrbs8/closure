console.log('');
console.log('========== 시작 ==========');

var outer = function () {
    var a = 1;
    console.log('a: ',a);
    var inner = function () {
        return ++a;
    }
    return inner;
}

console.log('A');
var outer2 = outer();

console.log('B');
console.log('a: ', outer2());

console.log('C');
console.log('a: ', outer2());

console.log('========== 종료 ==========');

