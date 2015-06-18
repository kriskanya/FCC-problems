function convert(num) {
    var numString = num.toString().split('');
    var nineEdgeCase = '';
    if (numString[numString.length-1] === '9') {
        nineEdgeCase = 'IX';
        numString[numString.length-1] = '0';
        num = Number(numString.join(''));
    }

    var tens = Math.floor(num / 10);
    var fives = Math.floor((num - (tens * 10)) / 5);
    var singles = num % 10 % 5;

    tens = Array(tens + 1).join('X');
    fives = Array(fives + 1).join('V');
    singles = singles < 4 ? Array(singles + 1).join('I') : 'IV';

    return tens + fives + nineEdgeCase + singles;
}

convert(13);
