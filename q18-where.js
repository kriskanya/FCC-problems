// one solution

function where(arr, num) {
    arr = arr.sort();

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[i+1]);
        if (arr[i] <= num && arr[i + 1] >= num) {
            return i + 1;
        }
    }
}

where([10, 20, 30, 40, 50], 30);

// another solution

function where(arr, num) {
   arr.push(num);
   arr.sort(arr);
   return arr.indexOf(num);
}
