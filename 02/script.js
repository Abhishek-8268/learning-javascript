// dataType varName = value;   these are called strongly Typed Languages (like c++)
// js -> loos
var age = 20;
age = "abhishek"
console.log(age)
var num1 = 50;
var num2 = 100;
console.log(num1 + num2);

// var ---> Global
// let, const ---> local
// const ---> local , but its value can not be changed once assigned
// Scope        Function-scoped(var)      Block-scoped {let, const}

if(true) {
    var number = 15;
    console.log(number)
}
console.log(number)