function steamroller(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(Array.isArray(b) ? steamroller(b) : b);
    }, []);
}

steamroller([1, [2], [3, [[4]]]]);
