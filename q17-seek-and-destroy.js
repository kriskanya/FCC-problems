function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);

    return arr.filter(function(item) {
        for (var i = 0; i < args.length; i++) {
            if (args[i] === item) {
                return false;
            }
        }
        return true;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
