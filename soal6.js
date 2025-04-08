const menus = {
    "Ayam Goreng Krispi": {type: "Makanan", price: 15000},
    "Ayam Puk Puk": {type: "Makanan", price: 13000},
    "Ayam Bakar": {type: "Makanan", price: 20000},
    "Es Teh": {type: "Minuman", price: 5000},
    "Es Jeruk": {type: "Minuman", price: 7000}
};

const taxMakanan = 0.05;
const taxMinuman = 0.03;
const transactionTax = 0.15;

function calculatePayment(order) {
    let total = 0;
    for (let [menuName, quantity] of Object.entries(order)) {
        if (!(menus[menuName])) {
            return 0;
        }

        if (menus[menuName].type === "Makanan") {
            taxedPrice = menus[menuName].price * (1 + taxMakanan);
            total += taxedPrice * quantity;
        } else if (menus[menuName].type === "Minuman") {
            taxedPrice = menus[menuName].price * (1 + taxMinuman);
            total += taxedPrice * quantity;
        }
    }
    return total * (1 + transactionTax);
} 

console.log("Rehan Whangsap harus membayar: Rp. " + calculatePayment({"Ayam Bakar": 2, "Es Teh": 1}));
console.log("Amba roni harus membayar: Rp. " + calculatePayment({"Ayam Puk Puk": 1, "Es Teh": 3}));
console.log("Faiz ngawi harus membayar: Rp. " + calculatePayment({"Ayam Goreng Krispi": 1,"Ayam Puk Puk": 1, "Ayam Bakar": 1, "Es Teh": 1,"Es Jeruk": 1 }));