function translate(str) {
    str = str.split('');

    if (isVowel(str[0])) {
        str.push('way');
    } else if (!isVowel(str[1])) {
        var spl = str.splice(0, 2).join('');
        str.push(spl + 'ay');
    } else {
        var shift = str.shift();
        str.push(shift + 'ay');
    }
    return str.join('');
}

function isVowel(str) {
    return (/^[aeiou]$/i).test(str);
}

translate("glove");
