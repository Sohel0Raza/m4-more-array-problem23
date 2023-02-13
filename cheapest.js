function cheapestPhone (phones){
    let cheapest = phones[0]
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.camera > cheapest.camera){
            cheapest = phone;
        }
    }
    return cheapest;
}
const phones = [
    { name: 'Samsung', camera: 48, Storage: '128gb', price: 22000, color: 'black'},
    { name: 'iphone', camera: 12, Storage: '256gb', price: 122000, color: 'blue'},
    { name: 'readmi', camera: 50, Storage: '64gb', price: 20000, color: 'white'},
    { name: 'infinix', camera: 48, Storage: '128gb', price: 15000, color: 'black'},
    { name: 'oppo', camera: 48, Storage: '128gb', price: 25000, color: 'green'},
    { name: 'xaomi', camera: 108, Storage: '128gb', price: 50000, color: 'black'},
    { name: 'Nokiya', camera: 48, Storage: '128gb', price: 30000, color: 'black'},
    { name: 'walton', camera: 13, Storage: '64gb', price: 10000, color: 'black'}
]

const myPhone = cheapestPhone(phones)
console.log(myPhone)