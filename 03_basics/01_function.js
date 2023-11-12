function sayMyName(){
//     console.log("a");
//     console.log("m");
//     console.log("a");
//     console.log("n");
}
sayMyName()

function addNum(num1 , num2){
       return  num1+num2
}

// console.log(addNum(2,4));


function addTwo(n,m){
           let res=n+m
           return res
}

let result=addTwo(2,5)
// console.log(result);

function addCartPrice(val,...num1){
                 return num1
}

console.log(addCartPrice(2,4,5));


const user={
    username:"Aman",
    price:12
}
function handleObject(anyobject){
             console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:12  
})