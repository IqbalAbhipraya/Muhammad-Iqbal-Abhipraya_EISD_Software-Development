//soal 4 tentang mencari apakah ada duplikat di array tersebut atau tidak
function checkDuplicate(arr) {
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return "True";
        }
    }

    return "False";
}

var array = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19];

console.log(checkDuplicate(array));