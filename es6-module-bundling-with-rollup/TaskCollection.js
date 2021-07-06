export default class TaskCollection {
    //export class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

export let foo = 'bar';

// export myfunc = function() {};

// export default TaskCollection;