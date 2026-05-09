const add = (arr)=>{
 return arr.reduce((acc,cur)=>{
   return acc + cur
 })
}

console.log(add([2,7,3,8]));

const sub = (arr)=>{
    return arr.reduce((acc,cur)=>{
        return acc- cur
    })
}
console.log(sub([10,2,3,3]));

const mul = (arr) =>{
    return arr.reduce((acc,cur) =>{
        return acc * cur
    })
}

console.log(mul([2,2,2,2,2,2]));

const divide = (arr) =>{
    return arr.reduce((acc,cur) =>{
        return acc/ cur
    })
}
console.log(divide([10,2,,3]));

let firstOPerand;
let operator;
let secondOPerand;