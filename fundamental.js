//1. How to declare a variable using let and const
const fatherName = 'Anrod';
let season = "Winter";
season = 'Rainy';

//2. conditions
//3. basic conditions: >, <, ===, !==, <=, >=
//multiple conditions: &&, ||

if(fatherName === 'anrod' || season === 'Winter'){

}else if(fatherName === 'Anrod'){

}else{}

//3. array delclare
// index
//length, push
const numbers = [89, 35, 98, 23];
numbers[0] = 35;
//4. for loop
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
//5. function
function multiyply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiyply(23, 35);

//6. object
const student = {
    name: 'khan khan',
    age: 45,
    movies: ['king khan', 'dablu dablu']
}
console.log(student['age']);//access via property name string
console.log(student.age);//direct by property
const myAge = age;
console.log(student[myAge]);//access via property name in a variable
