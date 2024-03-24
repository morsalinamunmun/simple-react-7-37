const localStorage = () =>{
    const inputId = document.getElementById('storage-id');
    const inputValue = document.getElementById('storage-value');
    const id = inputId.value;
    const value = inputValue.value;
    if(id && value){
        localStorage.setItem(id, value);
    }
    inputId.textContent = '';
    inputValue.textContent = '';
}
const pen ={name: 'monu', price: 67};
localStorage.setItem('pen', JSON.stringify(pen));
const p = localStorage.getItem(JSON.parse('pen'));
console.log(p);
//update
pen.price = 34;
localStorage.setItem('pen', JSON.stringify(pen))