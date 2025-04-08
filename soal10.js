//soal 10 tentang menghitung kembalian
const currency = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

function kembalian(payment, price) {
    let change = payment - price;
    let output = {};
    if (change <= 0) {return "need more money"};

    for (let cur of currency) {
        if (change >= cur) {
            let quantity = Math.floor(change / cur);
            output[cur] = quantity;
            change -= cur * quantity;
        }
    }

    return output;
}

console.log(kembalian(10000, 7500));
console.log(kembalian(5000, 1100));
console.log(kembalian(178000, 90500));
