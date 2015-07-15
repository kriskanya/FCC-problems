function pairwise(arr, arg) {
    var foundNums = [];
    var foundIndexes = [];

    if (!arr.length) {
        return 0;
    }

    for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg && i !== j) {
                if (foundIndexes.indexOf(i) === -1 && foundIndexes.indexOf(j) === -1) {
                    foundIndexes.push(i, j);
                    foundNums.push(arr[i], arr[j]);
                }
            }
        }
    }
    return foundIndexes.reduce(function(a, b) {
        return a + b;
    });
}

pairwise([1,4,2,3,0,5], 7);
//pairwise([1,1,1], 2);
//pairwise([], 0)
