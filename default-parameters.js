//es5

// function applyDiscount(cost, discount) {
//     discount = discount || .10;
//     return cost - (cost * discount)
// }

//es6
function defaultDiscountRate() {
    return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
    return cost - (cost * discount)
}

alert(applyDiscount(100, .40))
alert(applyDiscount(100))