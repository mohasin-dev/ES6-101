let title = 'Red Rising';
// console.log(title.indexOf('R')); // 0
// console.log(title.indexOf('x')); //-1

// if (title.indexOf('R') == 0) {
//     console.log('R is the first char');
// }

// if (title.indexOf('X') == -1) {
//     console.log('X is the first char');
// }

if (!title.includes('X')) {
    console.log('X is the first char');
}

if (title.includes('Red')) {
    console.log('Red exists');
}

if (title.startsWith('Red')) {
    console.log('start with Red');
}
if (title.startsWith('i', 5)) {
    console.log('it does');
}
if (title.endsWith('ing')) {
    console.log('start with ing');
}
if (title.startsWith('i', 5)) {
    console.log('it does');
}

let str = ' I love you '
    //console.log(title.repeat(10));
    //console.log(str + ' you'.repeat(10));
console.log('>='.repeat(5) + str + '=<'.repeat(5));