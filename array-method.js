const products = [
    {name: 'laptop', price: 42000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 22000, brand: 'oppo', color: 'black'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'golden'},
    {name: 'sunglass', price: 1200, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 132000, brand: 'canon', color: 'gray'},
];
//map element gulok array te return korbe
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
//console.log(prices);
//return na lagle use of forEach
products.forEach(product => console.log(product.color));

//3. filter condition fulfill return result, multiple match
const cheap = products.filter(product => product.price <= 5000);
//console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

//4. find condition akta match hole oi akta return korbe
const special = products.find(p => p.name.includes('n'));
console.log(special);