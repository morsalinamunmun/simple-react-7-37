const student ={
    name: 'khan khan',
    age: 45,
    movies: ['king khan', 'dablu dablu']
}
//js to JSON do the stringify
const studentJSON = JSON.stringify(student);
//console.log(student);
//console.log(studentJSON);

//json to js do the parse
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//fetch 
//given bellow fetch structure
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

//keys, values
const key = Object.keys(student);
const value = Object.values(student);
//we do not want to function return use for each
const numbers = [, 3, 1, 5, 7, 6];
numbers.forEach(number => console.log(number));
//we want to function return uses of map
numbers.map(n => n * 2);
//for of on array like object
//loop on an object using for in

const products = [
    {name: 'laptop', price: 42000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 22000, brand: 'oppo', color: 'black'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'golden'},
    {name: 'sunglass', price: 1200, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 132000, brand: 'canon', color: 'gray'},
];
const newProduct ={name: 'wee', price: '2340', brand: 'ruo'}
//copy products array and then add newProduct
const updateProduct = [...products, newProduct];
//create a new array without one specific item
//remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');