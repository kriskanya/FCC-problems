function unite(arr1, arr2, arr3) {
    var newArray = [arr1, arr2, arr3].reduce(function(prev, curr) {
        return prev.concat(curr);
    });
    return unique(newArray);
}

function unique(arr){
    return arr.filter(function(item, i, ar){
        return ar.indexOf(item) === i;
    });
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
