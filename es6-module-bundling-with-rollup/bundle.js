'use strict';

class TaskCollection {
    //export class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

let foo = 'bar';

// export myfunc = function() {};

// export default TaskCollection;

// import { TaskCollection, foo } from "./TaskCollection";
// import TaskCollection from "./TaskCollection";

new TaskCollection([
    'Go to the store',
    'Finish ES6 tutorial',
    'Eat cake'
]).dump();

console.log(foo);
