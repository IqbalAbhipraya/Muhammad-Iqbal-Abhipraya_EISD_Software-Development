function minMaxMedian (arr) {
    arr.sort((a, b) => a - b);

    let min = arr[0];
    let max = arr[arr.length - 1];

    let arrayMid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        var median = (arr[arrayMid - 1] + arr[arrayMid]) / 2;
    } else {
        var median = arr[arrayMid];
    }

    return [min, max, median];
}

array = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];
console.log(minMaxMedian(array));