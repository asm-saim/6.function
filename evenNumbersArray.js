const numbers = [23, 66, 89, 33, 23, 68, 32]

function evenArray(even) {
    let evenNumbers = [];
    for (number of even) {
        if (number % 2 === 0) {
            evenNumbers.push(number)
        }
    }
    return evenNumbers;
}
const result = evenArray(numbers);
console.log(result);


//find the biggest number.

const numberArray = [34, 679, 90, 33, 22]

function biggest(bigNumber) {
    let num1 = bigNumber[0];
    for (let num of bigNumber) {
        if (num > num1) {
            num1 = num;
        }
    }
    return num1;

}
console.log(biggest(numberArray))