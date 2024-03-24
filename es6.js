const numbers = [89, 35, 98, 23];
const student = {
    name: 'khan khan',
    age: 45,
    movies: ['king khan', 'dablu dablu']
}
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} alse liked movies ${student.movies[0]}`;
console.log(about);
//2 arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (a, b, c) => a + b + c;
const doMath = (x, y) =>{
    const sum = x + y;
    return sum;
}

//spread operator 
//const newNumbers = numbers;
//old array no change but update
const newNumbers = [...numbers]; 
numbers.push(89);
console.log(numbers);
console.log(newNumbers);
//create a new array from an older array snd add an element
const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);