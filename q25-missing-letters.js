// initial answer

function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    str = str.split('');
    var missingLetters = [];

    var start = alphabet.indexOf(str[0]);

    for (var i = 0; i < str.length; i++) {
        if (alphabet[i + start].charCodeAt(0) !== str[i].charCodeAt(0)) {
            var spl = alphabet.splice(i, 1);
            missingLetters.push(spl);
        }
    }
    return missingLetters[0] ? missingLetters.join('') : undefined;
}

fearNotLetter('abd');

// more concise answer

function fearNotLetter(str) {
    var start = str.charCodeAt(0);
    var end = str.charCodeAt(str.length-1);
    var result = undefined;

    for(var i = start; i <= end; i++){
        var templetter = String.fromCharCode(i);
        if(str.indexOf(templetter) < 0){
            return templetter;
        }
    }
    return result;
}

fearNotLetter('ABC');
