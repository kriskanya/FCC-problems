function binaryAgent(str) {
    var array = str.split(' ');

    return array.map(function(item) {
        return String.fromCharCode(convertBinary(item));
    }).join('');
}

function convertBinary(num) {
    var result = 0;
    for (var i = 0; i < num.length; i++) {
        result += num[num.length - (i + 1)] * Math.pow(2, i);
    }
    return result;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
