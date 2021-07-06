// object shorthand //

// function getPerson() {
//     let name = 'MH';
//     let age = 25;

//     // return {
//     //     name: name,
//     //     age: age,
//     // greet: function() {
//     //     return 'hello' + this.name;
//     // }
//     // }

//     return {
//         name,
//         age,
//         // method shorthand
//         greet() {
//             return `hello ${this.name}`;
//         }
//     }
// }

//console.log(getPerson().greet());

// object distruction //

// let person = {
//     name: 'Samia',
//     age: 20
// }

// let { name, age } = person;
// alert(name);

// in php
//extract(['name' => 'MH']);
//echo $name; // MH

let data = {
        name: 'Samia',
        age: 20,
        results: ['foo', 'bar'],
        count: 30
    }
    //ES5
    //var results = data.results;

// let { results, count } = data;
// alert(count);

// short methods syntex //

// ES5
// function getData(data) {
//     //var results = data.results;
//     //var count = data.count;
// }
// ES5
function getData({ results, count }) {
    alert(count);
}

///getData(data);

// anather example //
// es5
// function greet(person) {
//     this.name = person.name
//     this.age = person.age
//     console.log('Hello, ' + name + '. You are ' + age)
// }
// es6
function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age}`)
}

greet({ name: 'MH', age: 25 })