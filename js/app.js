const result = document.querySelector('#result');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication')
const sum = document.querySelector('#sum');
const minus = document.querySelector('#minus');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');

const clear = document.querySelector('#clear');
const allClear = document.querySelector('#allClear');

let operationFinished = false; // Show id the operation ends.

allClear.addEventListener('click', clearAllDates);
clear.addEventListener('click', clearLastInput);

one.addEventListener('click', enterValue);
two.addEventListener('click', enterValue);
three.addEventListener('click', enterValue);
four.addEventListener('click', enterValue);
five.addEventListener('click', enterValue);
six.addEventListener('click', enterValue);
seven.addEventListener('click', enterValue);
eight.addEventListener('click', enterValue);
nine.addEventListener('click', enterValue);
zero.addEventListener('click', enterValue);
point.addEventListener('click', enterPoint);

division.addEventListener('click', operate);
multiplication.addEventListener('click', operate);
minus.addEventListener('click', operate);
sum.addEventListener('click', operate);
equal.addEventListener('click', operate);


function clearAllDates() {
    result.textContent = '';
}

function enterValue(e) {
    if(operationFinished) {
        removeResult();
        operationFinished = false;
    }
    result.textContent += e.target.textContent;
}

// this function loads the values and the operator in an array and calls the operation function
function operate(e) {
    let valors = result.textContent.split(' ');
    if(e.target.textContent === '='){
        operationFinished = true;
        result.textContent = operation(valors);
    } else {
        operationFinished = false;
        result.textContent = operation(valors);
        result.textContent += e.target.textContent;
    }  
}

function operation(arr) {
    point.disabled = false;
    point.classList.remove('pointIsHere');
    if(arr.length===1) return Number(arr[0]);
    if(arr[1] === '+') return Math.round((Number(arr[0]) + Number(arr[2]))*10)/10;
    if(arr[1] === '-') return Math.round((Number(arr[0]) - Number(arr[2]))*10)/10;
    if(arr[1] === 'x') return Math.round((Number(arr[0]) * Number(arr[2]))*10)/10;
    if(arr[1] === '/') return Math.round((Number(arr[0]) / Number(arr[2]))*10)/10;
}

function minusValors(arr) {
    return arr[1] ? Number(arr[0]) - Number(arr[1]) : Number(arr[0]);
}

function enterPoint(e) {
    point.classList.add('pointIsHere');
    point.disabled = true;
    enterValue(e);
}

function removeResult(){
    result.textContent = "";
}

function clearLastInput() {
    let displayed = result.textContent
    let lastIndex = displayed.length-1; 
    // the operators have one space before and one space after
    if(displayed[lastIndex] === ' ') lastIndex -=2;
    displayed = displayed.substring(0 , lastIndex);
    result.textContent = displayed;
}