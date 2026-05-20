const add = (a,b)=> a + b

const sub = (a,b)=> a - b

const mul = (a,b) => a * b


const div = (a,b)=>{
    if (b===0) return "Error!"
    return a/b
}
 
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

const display = document.querySelector("#display");
display.textContent = "0";

 const container = document.querySelector("#container")

const clearButton = document.createElement("button");
clearButton.textContent = "CLR";
container.appendChild(clearButton);

clearButton.addEventListener("click",() =>{
    current = "0"
    num1 = undefined;
    operator = undefined;
    display.textContent = "0"
}) 


const buttons = document.querySelectorAll("button")
buttons.forEach((button) =>{
    button.addEventListener("click",()=>{

    if( button.textContent !=="+" && button.textContent !=="-" && button.textContent !=="*" && button.textContent !=="/" && button.textContent !=="=" && button.textContent !=="CLR"){
        if(current ==="0"){
            current = button.textContent;
        }else{
            current += button.textContent;
        }

        display.textContent = current;
}

 // --- if it's an OPERATOR button ---
   
if(button.textContent ==="+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/"){
 
if(num1 !==undefined){
    let result = operate(operator,num1,parseFloat(current));
    if(result === "Error!"){
          display.textContent = result;
        num1 = undefined;
        operator = undefined;
        current = "0";
        return;
    }
    display.textContent = +(result.toFixed(4));
    num1 = result
}else {
    num1 = +current
}
operator = button.textContent
current = "0"


}

    // --- if it's the EQUALS button ---
if (button.textContent === "="){
    if(num1 === undefined || operator === undefined) return;
    num2 = parseFloat(current);
    let result = operate(operator,num1,num2);
    if(result === "Error!"){
        display.textContent = result
    }else{

        display.textContent = +(result.toFixed(4));
    }
    current = "0";
    num1 = undefined;
    operator = undefined;
    
    
}
    })
 
});

