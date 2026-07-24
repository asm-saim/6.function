function even(number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

const value1 = even(23)
console.log("Is even: ", value1)

//is odd
function isOdd(x) {
    if (x % 2 === 1) {
        return true;
    }
    else {
        return false;
    }
}

const value2=isOdd(27);
console.log("Is Odd: ",value2)