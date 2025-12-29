// Data Types
//Numbers

let num1 = 3;
let num2 = 3.14;
console.log(num1 + num2);

// string
const first_name = "Abhishek"
const last_name = 'Raj'

console.log(first_name + " " +last_name)

///booleans
// 1--> true , 0 --> false

let isLogedIn = false;
console.log(isLogedIn)

// null

let lastLoginDate = null;

// undefined 

let lastLoginTime = undefined;

// undefined → variable is declared but not assigned

// null → variable is explicitly set to “no value”

// objects

const person = {
    FirstName : "Abhi",
    lastName : "Raj",
    isLogedIn : false
}

console.log(person.FirstName)

// JavaScript coerces strings to numbers for arithmetic operations, except +, which can concatenate strings.

// "5" + 2   // "52"  (string concatenation)
// "5" - 2   // 3
// "5" * 2   // 10
// "5" / 2   // 2.5

// string * number = NaN (not a number)

// typeof Operator

console.log(typeof person)
console.log(typeof person.FirstName)


