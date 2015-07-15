function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    for(var i = 0; i < arr.length; i++) {
        var semiMajor = earthRadius + arr[i].avgAlt;
        arr[i] = {
          name: arr[i].name,
          orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(
             Math.pow(semiMajor, 3) / GM))
        };
    }
    return arr;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
