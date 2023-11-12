// Object.create 

const mySym=Symbol("key1")
const jsuser={
    name: "Aman",
    age: 18,
    [mySym]: "key1",
    "full name": "Aman Srivastava",
    gender: "m",
    location: "ftp"
}
console.log(jsuser.age);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);


jsuser.name="Aman s"
Object.freeze(jsuser)
jsuser.name="Srivastava"
console.log(jsuser);



