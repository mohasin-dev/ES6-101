// arr = ['A', 'B', 'C']

// if (!arr.includes('X')) {
//     console.log('X is not exist in the array');
// }

// if (arr.includes('A')) {
//     console.log('A exist in the array');
// }

let numbers = [1, 2, 3, 4, 5];

// if (numbers.includes(4)) {
//     console.log('exist');
// }

// console.log(numbers.indexOf(4) > -1);
// console.log(numbers.indexOf(40) > -1);
console.log(numbers.includes(4));


console.log(numbers.find(number => number > 2));
console.log(numbers.findIndex(number => number > 2));
//console.log(numbers.find(number => number === 2));

class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('MH', false),
    new User('Samia', true),
    new User('Sajan', false),
];

console.log(
    users.find(user => user.isAdmin).name
)

// numbers.fill();
// numbers.keys();
// numbers.values();
// numbers.entries();

//console.log(['MH', 'SM'].entries()); // array iterator
let items = ['MH', 'SM'].entries();
for (let name of items) console.log(name);