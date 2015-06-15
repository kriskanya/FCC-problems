// dumb way to do it:

function chunk(arr, size) {
    var newArray = [];

    for (var i = 0; i < arr.length; i+=size) {
        var temp = [];
        for (var j = 0; j < size; j++) {
            if (arr[i + j] !== undefined) {
                temp.push(arr[i + j]);
            }
            if (j === 1) {
                 newArray.push(temp);
            }
        }
    }
    return newArray;
}

// better way to do it:

function chunk(arr, size) {
  var result = [];
  while(arr.length > 0){
      var temp = arr.splice(0, size);
      result.push(temp);
  }

  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
