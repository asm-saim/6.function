//sum of array using function: power of reusability
// we may use for of loop to get sum, but it will take multiple loop for multiple array. 

const numbers = [3, 55, 77, 89, 33, 56, 88];
const numbers2 = [45, 4, 24, 80, 336, 899];
const numbers3 = [455, 6, 46, 55, 99];

function arraySum(array) {
    let sum = 0;
    for (number of array) {
        sum = sum + number;
    }

    return sum;
}
const result = arraySum(numbers);
console.log(result);

const result2 = arraySum(numbers2);
console.log(result2);

const result3 = arraySum(numbers3);
console.log(result3)