function convert(str) {
    var newStr = str.replace(/(&)/gi, '&amp;');
    newStr = newStr.replace(/(<)/gi, '&#60;');
    newStr = newStr.replace(/(>)/gi, '&#62;');
    newStr = newStr.replace(/(')/gi, 'a&#769;');

    return newStr;
}

// no idea why this isn't passing

convert('<>');
