const add = (a,b)=> a + b

const sub = (a,b)=> a - b

const mul = (a,b) => a * b


const div = (a,b) => a / b

let num1;
let operator;
let num2;

const operate = (operator,num1,num2) =>{
    if(operator === "+") return add(num1,num2);
    if(operator === "-") return sub(num1,num2);
    if(operator ==="*") return mul(num1,num2);
    if(operator ==="/") return div(num1,num2) 

}
console.log(operate("/",2,2));

// const container = document.querySelector("#container")

// const btn = document.createElement("button")

// const button = [1,2,3,4,5,6,7,8,9,0,"="]

// button.forEach((item) =>{
//     const btn = document.createElement("button")
//     btn.textContent = item
//     btn.style.width= "40px"
//     btn.style.aspectRatio = "1"
//     btn.style.margin = "5px"
//     container.appendChild(btn)
// })



