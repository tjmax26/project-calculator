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

// const btn = [1,2,3,4,5,6,7,8,9,0,".","+","-","*","/", "="]

// btn.forEach((item)=>{
//     const button = document.createElement("button");
//     button.textContent = item
//     button.style.width = "80px";
//     button.style.fontSize = "35px";
//     button.style.margin = "30px";
//     button.style.marginTop = "30px"
//     container.appendChild(button)
// })
