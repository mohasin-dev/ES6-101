// var thing = new Promise(function(resolve, reject) {
//     console.log('Init promise');

//     setTimeout(function() {
//         console.log('Timeout done.')
//         resolve();
//     }, 2000);
//     //resolve()
// });

// thing.then(function() {
//     console.log('do it');
// })

// thing.then will only trigger when we call resolve
//thing.then();

var timer = function(length) {
    return new Promise(function(resolve, reject) {
        console.log('Init promise');

        setTimeout(function() {
            console.log('Timeout done.')
            resolve();
        }, length);
        //resolve()
    });
}

timer(3000).then(() => alert('All done'));