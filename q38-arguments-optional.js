function add() {
    if (!isNaN(arguments[0]) && !arguments[1]) {
        var arg0 = arguments[0];
        return function(arg2) {
            if (typeof arg2 === 'number') {
                return arg0 + arg2;
            } else {
                return undefined;
            }
        };
    }

    if (typeof arguments[0] !== 'number' || typeof arguments[1] !==
    'number') return undefined;

    return arguments[0] + arguments[1];
}

add(2)(3)
add(2)([3])

var sum2And = add(2);
sum2And(3);
