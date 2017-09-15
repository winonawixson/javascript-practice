// function swap(a, b) {
//     var temp = a;
//     a = b;
//     b = temp;
// }

// var x = 1, y = 2;
// swap (x, y);
// alert("x is " + x);

// function funky(o) {
//     o = null;
// }

// var z = [];
// funky(z);
// alert("z is " + z);

function identity(x) {
    return x;
}

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a*b;
}

function identityf(a) {
    return function () {
        return a;
    }
}

function addf(x) {
    return function (y) {
        return x + y;
    }
}

function applyf(x) {
    return function (y) {
        return function (z) {
            return x(y, z);
        }
    }
}

function curry(binary, x) {
    return function (y) {
        return binary(x, y);
    }
}

var addf = applyf(add)(3)(4);
var mulf = applyf(mul)(3)(4);

var add3 = curry(add, 3);
var res = add3(4);

var result = curry(mul, 5)(6);

function inc1 (x) {
    return add(x, 1);
}

function inc2 (x) {
    return curry(add, x)(1);
}

function inc3(x) {
    return applyf(add)(x)(1);
}

function methodize(func) {
    return function (y) {
        return func(this, y);
    }
}
function demethodize(func) {
    return function(that, y){
        return func.call(that, y);
    }
}

Number.prototype.add = methodize(add);
//(3).add(4);

var demethRes = demethodize(Number.prototype.add)(5, 6);

function twice (func) {
    return function (x) {
        return func(x, x);
    }
}

var double = twice(add);
var square = twice(mul);

function composeu(func1, func2) {
    return function (x) {
        return func2(func1(x));
    };
}

function composeb(g, f) {
    return function (a, b, c) {
        return f(g(a, b), c);
    };
}

function once(func) {
    return function () {
        var f = func;
        func = null;
        return f.apply(this, arguments);
    };
}

function counterf(x) {
    return {
        inc: function () {
            x += 1;
            return x;
        },
        dec: function () {
            x -= 1;
            return x;
        }
    }
}

function revocable (nice) {
    return {
        invoke: function () {
            return nice.apply(this, arguments);
        },
        revoke: function () {
            nice = null;
        }
    }
}
