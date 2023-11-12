// const tinderUser =new Object{}

const tinderUser={
      
}
tinderUser.id="123abc"
tinderUser.name="Aman"
tinderUser.isLoggedin=false

// console.log(tinderUser);

const regularuser={
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "Aman",
            lastname: "Srivastava"
        }
    }
}

// console.log(regularuser.fullname.username);


const obj1={ 1: "a",2: "b"}
const obj2={ 3: "c",4: "d"}

// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);

const obj3={...obj1 , ...obj2}
// console.log(obj3);


console.log(tinderUser);
console.log(Object.keys(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));