function sumFibs(num) {
    var array = [1, 1];
    for (var i = 1; ; i++) {
        var result = array[i] + array[i-1];
        if (result > num) {
            break;
        } else {
            array.push(result);
        }
    }
    return array.filter(function(element) {
        return element % 2;
    }).reduce(function(a, b) {
        return a + b;
    });
}
