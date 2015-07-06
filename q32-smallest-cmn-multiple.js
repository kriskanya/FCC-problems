function smallestCommons(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var array = range(min, max, 1);

    while (noRemainders(remaindersArray(array, max)) === false) {
        max++;
    }
    return max;
}

function range(start, stop, step) {
    var a=[start], b=start;
    while (b<stop) {
        b+=step;
        a.push(b);
    }
    return a;
}

function remaindersArray(array, start) {
    return array.map(function(currentValue) {
        return start % currentValue;
    });
}

function noRemainders(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            return false;
        }
    }
    return true;
}


smallestCommons([1,5]);
smallestCommons([5,1]);
smallestCommons([1,13]);
