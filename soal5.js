//soal 5 tentang mencari nama nama yang bisa jadi username (max 6)
function numberOfPermutasi(username, maxNumber) {
    username = username.toLowerCase();
    let charList = username.split('').filter(c => c !== " ");
    let totalCombination = new Set();

    function permutasi(path, used) {
        if (path.length > 0 && path.length <= maxNumber) {
            totalCombination.add(path.join("")); // buat join kata kata nya
        }
        if (path.length === maxNumber) return; //kalau sudah diisi 6 kata return (recursivenya selesai)
      
        for (let i = 0; i < charList.length; i++) {
            if (used.has(i)) continue; // kalo indexnya udh ada di used continue for loopnya
            path.push(charList[i]); // push characternya ke list path
            used.add(i); // add index characternya ke set used
            permutasi(path, used); // recursive
            used.delete(i); // kalo sudah return (pas check line 10), delete indexnya dari set used
            path.pop(); // delete elemen terakhir dari array itu
        }
    }

    permutasi([], new Set());
    return Array.from(totalCombination);
}

answer = numberOfPermutasi("Naip Lovyu", 6);

console.log(answer);
console.log(answer.length);