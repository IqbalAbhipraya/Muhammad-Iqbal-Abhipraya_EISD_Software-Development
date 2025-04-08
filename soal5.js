function numberOfPermutasi(username, maxNumber) {
    username = username.toLowerCase();
    let charList = username.split('').filter(c => c !== " ");
    let totalCombination = new Set();

    function permutasi(path, used) {
        if (path.length > 0 && path.length <= maxNumber) {
            totalCombination.add(path.join(""));
        }
        if (path.length === maxNumber) return;
      
        for (let i = 0; i < charList.length; i++) {
            if (used.has(i)) continue;
            path.push(charList[i]);
            used.add(i);
            permutasi(path, used);
            used.delete(i);
            path.pop();
        }
    }

    permutasi([], new Set());
    return Array.from(totalCombination);
}

answer = numberOfPermutasi("Naip Lovyu", 6);

console.log(answer);
console.log(answer.length);