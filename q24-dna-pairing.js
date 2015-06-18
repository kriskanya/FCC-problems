function pair(str) {
    str = str.split('');
    var newArray = [];

    str.forEach(function(item) {
        switch (item) {
            case 'G':
                newArray.push([item, 'C']);
                break;
            case 'C':
                newArray.push([item, 'G']);
                break;
            case 'A':
                newArray.push([item, 'T']);
                break;
            case 'T':
                newArray.push([item, 'A']);
                break;
        }
    });
    return newArray;
}

pair("GCG");
