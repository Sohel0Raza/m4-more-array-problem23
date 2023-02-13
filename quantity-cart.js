function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity ;
        sum = sum + productTotal;
        // console.log(product)
    }
    return sum;
}
const soppingCart = [
    { name: 'shoe', price: 1200, quantity: 3 },
    { name: 'shirt', price: 2200, quantity: 8 },
    { name: 'pant', price: 1400, quantity: 5 },
    { name: 'belt', price: 500, quantity: 2 },
]
const expense = totalCost(soppingCart)
console.log('Total expense today:', expense)