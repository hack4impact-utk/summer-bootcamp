"use strict";
// Three way to define variables, let, const, var
// let and const are block scoped
// var is function scoped
// const is immutable
// let and var are mutable
// What does this all mean?
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createPerson1(name, age) {
    return {
        name,
        age,
        printPerson: () => {
            console.log(`${name} is ${age} years old`);
        },
    };
}
// Now, let's look at an anonymous function
// const createPerson = (name: string, age: number) => ({
//   name,
//   age,
//   printPerson: () => {
//     console.log(`${name} is ${age} years old`);
//   },
// });
// const person = createPerson('John', 20);
// person.printPerson();
// Notice the syntax here. We use a parenthesis for the function body which tells JavaScript to return whatever is inside.
// The above is equivalent to:
// const createPerson = (name: string, age: number): Person => {
//   console.log('test');
//   return {
//     name,
//     age,
//     printPerson: () => {
//       console.log(`${name} is ${age} years old`);
//     },
//   };
// };
// const person = createPerson('John', 20);
// person.printPerson();
// We can also pass functions as arguments to other functions
// const printPersonFactory = (person: Omit<Person, 'printPerson'>) => {
//   return () => {
//     console.log(`${person.name} is ${person.age} years old`);
//   };
// };
// const createPerson = (
//   name: string,
//   age: number,
//   printPersonFactory: (person: Omit<Person, 'printPerson'>) => () => void
// ): Person => {
//   const person = {
//     name,
//     age,
//     printPerson: printPersonFactory({ name, age }),
//   };
//   return person;
// };
// const person = createPerson('John', 20, printPersonFactory);
// person.printPerson();
/* ======================================================================================================== */
// Callbacks -> Promises -> Async/Await
// With callbacks we used to just take an argument for what to do when the asynchronous operation was complete
// If you have some JavaScript experience, you've probably seen this pattern before (think setTimeout)
// setTimeout(() => {
//   // This is the callback function!
//   console.log('I waited 1 second for this!');
// }, 1000);
// This got very messy when dealing with a lot of asynchronous operations
// This is where promises come in. We aren't going to look at them today because they
// are a bit more advanced, but they are very useful and you should definitely look into them
// Instead, we'll look at async/await which is a newer syntax that makes asynchronous code look synchronous
// This is a very common pattern in React
// don't worry about what's going on here, this is just to simulate an asynchronous operation
// Our code will primarily deal with API calls which are asynchronous
const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
// We can now use the async keyword to tell JavaScript that this function is asynchronous
// We can then use the await keyword to tell JavaScript to wait for the asynchronous operation to complete
// before continuing
const waitAndPrint = () => __awaiter(void 0, void 0, void 0, function* () {
    yield wait(2000);
    console.log('I waited 2 seconds for this!');
});
waitAndPrint();
