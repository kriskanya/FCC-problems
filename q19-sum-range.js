// one solution

function sumAll(arr) {
    var acc = 0;
    arr = arr.sort(function(a, b) {
        return a - b;
    });

    for (var i = arr[0]; i <= arr[1]; i++) {
        acc += i;
    }
    return acc;
}

sumAll([5, 10]);

// another solution

function sumAll(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var accumulator = 0;

    while (min <= max) {
        accumulator += min;
        min++;
    }
    return accumulator;
}


sumAll([1, 4]);

// why did the directions want you to use reduce?
