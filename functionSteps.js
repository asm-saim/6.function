//1. how to declare a function
function getInfo() {

}

//2. how to call a function
function multiply() {

}
multiply()

//3.how to give parameter to a function
function sum(a, b) {
    const total = a + b;
}
sum(3, 4)

//4. how to return a function:
function divide(x, y) {
    const answer = x / y;
    return answer;
}
divide(10, 2)

//5. how to pass variable as arguments:
function square(x) {
    const final = x * x;
    return final;
}
const value = 5;
const output = square(value);
console.log(output)