function largestOfThree(arr) {
    var largest = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].length; x++) {
            if (arr[i][x] > largest) {
                largest = arr[i][x];
            }
        } //end loop inner
    } //end loop 1
    return largest;
}
var value1 = largestOfThree([[2, 6, 1], [6, 4, 2, 9]]);
console.log(value1);
