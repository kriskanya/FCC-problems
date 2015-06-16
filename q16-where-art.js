function where(collection, source) {
    var array = [];
    collection.forEach(function(obj) {
        var firstKey = Object.keys(obj)[0];
        var secondKey = Object.keys(obj)[1];
        var sourceKey = Object.keys(source)[0];
        var firstValue = obj[firstKey];
        var secondValue = obj[secondKey];
        var sourceValue = source[sourceKey];

        if (firstKey == sourceKey && firstValue == sourceValue || secondKey == sourceKey && secondValue == sourceValue) {
            array.push(obj);
        }
    });
    return array;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
