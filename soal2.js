//soal 2 tentang deteksi kata itu palindrom atau tidak 
function palindromDetector (word) {
    word = word.toLowerCase();
    let wordArray = word.split('');
    let reverseWord = wordArray.toReversed();

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i] != reverseWord[i]){
            return "suka blyat";
        }
    }

    return "eureeka!";
}

console.log(palindromDetector("Angsa"));
console.log(palindromDetector("Katak"));
console.log(palindromDetector("kasur empuk"));
console.log(palindromDetector("Aku Suka Kamu"));
console.log(palindromDetector("Ibu Ratna antar ubi"));