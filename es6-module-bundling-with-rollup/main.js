// import { TaskCollection, foo } from "./TaskCollection";
import TaskCollection, { foo } from "./TaskCollection";
// import TaskCollection from "./TaskCollection";

new TaskCollection([
    'Go to the store',
    'Finish ES6 tutorial',
    'Eat cake'
]).dump();

console.log(foo);