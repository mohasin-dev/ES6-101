// ES5
// // create a constructor
// function User(userName, email) {
//     this.userName = userName;
//     this.email = email;
// }

// // assign methods to the prototype, so that all instances share.
// User.prototype.changeEmail = function(newEmail) {
//     this.email = newEmail;
// };

// var user = new User('Samia', 'samia@gmail.com');
// user.changeEmail('foo@gmail.com');

// ES6
// This is systactic sugar on top of the old way
class User {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }

    // Behind the scense, this is added to the user prototype
    changeEmail(newEmail) {
        this.email = newEmail;
    }

    // static register(userName, email) {
    //     return new User(userName, email);
    // }

    // statics
    static register(...args) {
        // ...rest oparator
        return new User(...args); //...spread oparator
    }

    get foo() {
        return "foo";
    }

    // set bar(abc) {
    //     return abc;
    // }
}

//let user = new User('mohasin', 'support@mh.com');
let user = User.register("mohasin", "support@mh.com");

user.changeEmail("foo@example.com");

//console.log(user);
//console.dir(user);
//console.log(user.foo);

function log(strategy) {
    //strategy.handle();
    alert(strategy.handle());
}

log(new class {
    handle() {
        //alert("log it");
        return 'log it';
    }

    // get & set accessors
    // could be used for computed properties
    // get foo() {
    //     return "foo";
    // }
});

// class ConsoleLogger {
//     handle() {
//         alert("log it");
//     }
// }

//log(new ConsoleLogger());