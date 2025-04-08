function minMaxAverage (arr) {
    arr.sort((a, b) => a - b);

    let min = arr[0];
    let max = arr[arr.length - 1];
    let total = 0;
    
    for (let number of arr) {
        total += number;
    }

    let average = total / arr.length;

    return [min, max, average];
}

console.log(minMaxAverage([4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0]));
console.log(minMaxAverage([5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5]));