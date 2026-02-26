// let numbers = [10, 20, 30];

// console.log(numbers[0], numbers[1])

// console.log(typeof [1, 2, 3]) // "object")
// console.log(Array.isArray(numbers))

// let arr = [1, 2, 3];
// console.log(arr.length)
// arr.length = 1
// console.log(arr.length) // length modification is allowed but arr is truncated

// console.log(arr[0], arr[1])
// arr.push(2);//add at end
// arr.push(3);
// console.log(arr[0], arr[1]);
// console.log(arr.length);
// arr.pop();
// console.log(arr);

// arr.unshift(0);  // add at beginning
// console.log(arr);

// arr.shift() // remove from beginning
// console.log(arr)


// looping on arrays

// for (let i = 0; i < arr.length; i++) {  // traditional loop
//     console.log(arr[i]);
// }

// for (let value of arr) { // modern and clean
//     console.log(value);
// }

// imp  array methods

// let nums = [1, 2, 3];


// map method
// let doubled = nums.map(n => n * 2);
// console.log(doubled)


//filter method
// let even = nums.filter(n => n % 2 === 0);
// console.log(even)

// // reduce method
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum)

// find method
// let users = [{ id: 1 }, { id: 2 }];
// console.log(users.find(u => u.id === 2));


/// checks membership
// console.log([1, 2, 3].includes(2)); // true


// spread operator // acts like extend method in python
// let arr1 = [1, 2];
// let arr2 = [...arr1, 3, 4];
// console.log(arr1)
// console.log(arr2)

// let b = arr1; // reference copy
// let c = [...arr1]; // real copy
// console.log(b)
// console.log(c)

// // shallow copy vs deep copy
// let arr = [{ a: 1 }];
// let copy = [...arr];

// copy[0].a = 10;
// console.log(arr[0].a); // 10


// matrices
// let matrix = [
//     [1, 2],
//     [3, 4]
// ];

// console.log(matrix[0][1]);


///          edge cases

// sparese array  // array empty but pushing new element
// let arr = [];
// arr[5] = 10;

// console.log(arr.length); // 6

// for (let i = 0; i < arr.length; i++) {   // error
//     arr.pop();
//     console.log(arr.length);
// }
// console.log(arr.length);
