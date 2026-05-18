const add = (a,b)=> a + b

const sub = (a,b)=> a - b

const mul = (a,b) => a * b

const div = (a,b) => a / b

let num1;
let operator;
let num2;
let current = "0";

const operate = (operator,num1,num2) =>{
    if(operator === "+") return add(num1,num2);
    if(operator === "-") return sub(num1,num2);
    if(operator ==="*") return mul(num1,num2);
    if(operator ==="/") return div(num1,num2) 

}
// console.log(operate("+",2,2));

 const container = document.querySelector("#container")

 const display = document.querySelector("#display");
 display.textContent = "1234567890";


const clearButton = document.createElement("button");
clearButton.textContent = "CLR";
container.appendChild(clearButton);


clearButton.addEventListener("click",() =>{
    current = "0"
    display.textContent = "0"
})




const buttons = document.querySelectorAll("button")
buttons.forEach((button) =>{
    button.addEventListener("click",()=>{

    if( button.textContent !=="+" && button.textContent !=="-" && button.textContent !=="*" && button.textContent !=="/" && button.textContent !=="=" && button.textContent !=="CLR"){
        if(current ==="0" && button.textContent !== "."){
            current = button.textContent
        }else{
            current += button.textContent
        }
        display.textContent = current

}
   
if(button.textContent ==="+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/"){
  num1 = +current;
operator = button.textContent;
current = "0"
}

if (button.textContent === "="){
    num2 = parseFloat(current);
    let result = operate(operator,num1,num2);
    display.textContent = result;
}
    })
 
})

