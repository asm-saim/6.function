//we can pass parameter as a string, boolean, number, array, object 

//boolean
function price(half, double) {
    if (double === true) {
        const forBullshit = half / 2;
        return forBullshit;
    }

    else {
        const forPeople = half * 2;
        return forPeople
    }
}

const forLeaders = price(100, true)
console.log("Price for bullshit leaders: ", forLeaders)

const forPeople = price(100, false)
console.log("Price for mass people: ", forPeople)

//array:
function arrayCall(array) {
    const fistModification = array[0] * 2;
    return fistModification
}

const numbers = [23, 55, 88, 43, 22]
const value1 = arrayCall(numbers);
console.log(value1)

//object

const info = {
    name: "Kasfia",
    age: 10,
    class: 2
}

function objectParameter(object) {
    const secondValue = object.age;
    return secondValue
}
const value2 = objectParameter(info)
console.log("Age is ", value2)