function sumPrimes(num) {
    var array = [];
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            array.push(i);
        }
    }
    return array.reduce(function(a, b) {
        return a + b;
    });
}

function isPrime(num) {
    if (num === 1) return false;

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

sumPrimes(10);
