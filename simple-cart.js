function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
        // console.log(product)
    }
    return sum;
}
const soppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 1400 },
    { name: 'belt', price: 500 }
]
const expense = totalCost(soppingCart)
console.log('Total expense today:', expense)