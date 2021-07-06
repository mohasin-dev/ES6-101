// let & var
function fire(bool) {
    if (bool) {
        //var foo = 'bar';
        let foo = 'bar';
        console.log(foo); // bar
    } else {
        console.log(foo); // undefined - hoisting
    }
}

//fire(true);
//fire(false);

// const
const names = ['MH', 'SH'];
names = ['AA']; // can't reasign a const variable
console.log(names);