const products = [
    {name: "TV", category: "elektronik", price: 1000},
    {name: "headphone", category: "elektronik", price: 200},
    {name: "baju", category: "fashion", price: 50},
    {name: "gitar", category: "musik", price: 300},
    {name: "sepatu", category: "olahraga", price: 80},
    {name: "kamera", category: "elektronik", price: 600},
];

const customers = [
    {name: "Rina", minat: ["elektronik", "musik"], beli: ["TV", "headphone"]},
    {name: "Budi", minat: ["fashion", "musik"], beli: ["baju", "gitar"]},
    {name: "Hartono", minat: ["olahraga", "elektronik"], beli: ["sepatu", "kamera"]},
];

function suggestProduct(customerName) {
    let customer = customers.filter(c => c.name === customerName)[0];
    if (!customer) {
        return [];
    }
    let recommendedProduct = products.filter(p => customer.minat.includes(p.category)).map(p => p.name);

    return recommendedProduct;
}

console.log(suggestProduct("Hartono"));