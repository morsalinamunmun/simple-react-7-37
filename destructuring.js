//array destructuring
const numbers = [45, 23];
//const [x, y] = [45, 23];
const [x, y] = numbers;

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
//const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
console.log([first, second]);

const student ={
    name: 'khan khan',
    age: 45,
    movies: ['king khan', 'dablu dablu']
}
const [firstMove, secondMovie] = student.movies;
//distucturing object = object, array = array
//object destructuring object do not serial matter
const {name, age} = {name:'alu', age: 14};
const employee ={
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height: 5.1,
        weight: 45,
        address: 'Dinajpur',
        drink: 'water',
        watch:{
            colour: 'black',
            price: '500',
            brand: 'garmin'
        }
    }
}
const {machine, id} = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification.watch;