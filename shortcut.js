//'almas', 5, true, {}, []
//'', 0, false, null, undefined

let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}else{
    myVar = 0;
}

let myMoney = 50;
//you check negative or falsy anything
if(!myMoney){

}
const money = 80;
let food
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit'
}
//shortcut
//ternary
let food1 = money>100? 'biryani': 'cha biscuit';
console.log(food1);
let drink = (money > 100 && myVar > 100) ? 'coke': 'filter water';
console.log(drink);

const num1 = 45;
//number to string convert shortcut way
const numstr = num1 + '';
//string to number convert shortcut way
const input = '560';
const inputStr = +input;

const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed
isActive && showUser();
//use || if the left side is false then right side wi be executed
isActive || hideUser();

//toggle
isActive = !isActive;