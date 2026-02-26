let student = {
    name: "Jitin",
    age: 21,
    branch: "CSE"
};
// // console.log(student)
// console.log(student.name)
// console.log(student['name'])
// let key = "branch";
// student[key];
// student.year = 2;
// student.age = 20;
// delete student.year;
// console.log(student)


// objects areefference types // aliases
// let obj1 = { a: 1 };
// let obj2 = obj1;

// obj2.a = 10;

// console.log(obj1.a); // 10


// // loops over objs
// for (let key in student) {
//     console.log(key, student[key]);
// }


/// object methods

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));


// nested objects
// let user = {
//     name: "Jitin",
//     address: {
//         city: "Kanpur",
//         state: "UP"
//     }
// };

// console.log(user.address.city); // "Kanpur"


/// objects can contains functions, arrays , other objects

// let person = {
//     name: "Jitin",
//     greet() {
//         console.log("Hello " + this.name);
//     }
// };

// person.greet();

// Arrow functions DO NOT bind their own this.
// let obj = {
//     value: 10,
//     show() {
//         console.log(this.value);
//     }
// };
// obj.show();


// let { name, age } = student;
// console.log({ name, age });

// // spread over objects
// let copy = { ...student };
// console.log(copy)


// shallow vs deep copy
// let obj = {
//     nested: { value: 1 }
// };

// // let copy = { ...obj };      // shallow copy

// // copy.nested.value = 100;

// // console.log(obj.nested.value); // 100

// console.log(JSON.parse(JSON.stringify(obj))); // deep copy


// constructor function to create multiple objects
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let s1 = new Student("Jitin", 21);
// let s2 = new Student("Sameer", 20);
// console.log(s1.name, s2.age)

Array.prototype
