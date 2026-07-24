//we can pass parameter as a string, boolean, number, array 

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