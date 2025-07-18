
let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");

    let numbers = document.querySelectorAll(".num");
    let operators = document.querySelectorAll(".op");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((oper)=> oper.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click",function(){
        calculation()
        previousScreen.textContent='';
        currentScreen.textContent = previousValue
    })
})
 
function handleNumber(num){
    if(currentValue.length <= 8){
        currentValue += num;
    }   
}

function handleOperator(oper){
    console.log(oper);
    operator = oper;
    previousValue = currentValue;
    currentValue = '';
}

function calculation(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if(operator === "+"){
        previousValue += currentValue;
    }
    else if(operator === "-"){
        previousValue -= currentValue;
    }
    else if(operator === "*"){
        previousValue *= currentValue;
    }
    else{
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000)/1000;
}