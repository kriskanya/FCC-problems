function diff(arr1, arr2) {
    var firstArray = arr1.filter(function(element) {
        return arr2.indexOf(element) === -1;
    });

    var secondArray = arr2.filter(function(element) {
        return arr1.indexOf(element) === -1;
    });

    return firstArray.concat(secondArray);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
