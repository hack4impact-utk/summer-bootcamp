// Three way to define variables, let, const, var
// let and const are block scoped
// var is function scoped
// const is immutable
// let and var are mutable
// What does this all mean?

// What will be printed here?
// let a = 1;
// if (true) {
//   let a = 2;
//   console.log(a);
// }
// console.log(a);

// What will be printed here?
// var b = 1;
// if (true) {
//   b = 2;
//   console.log(b);
// }
// console.log(b);

// Const can not be reassigned
// const c = 1;
// c = 2;

// You can mutate const values, just not reassign them
// const d = [1, 2, 3];
// console.log(d);
// d.push(4);
// console.log(d);
// d = [1, 2, 3, 4]; // This is not allowed

// const e = {
//   name: 'John',
//   age: 20,
// };
// console.log(e);
// e.age = 21;
// console.log(e);

/* ======================================================================================================== */

// Objects are key value pairs, similar to dictionaries in Python or HashMaps in C++
// const person = {
//   name: 'John',
//   age: 20,
//   email: 'john@hi',
// };

// Can access values using normal subscript notation
// console.log(person['name']);
// console.log(person['age']);

// Can also access values using dot notation
// console.log(person.name);
// console.log(person.age);

/* ======================================================================================================== */

// But there's a bit of a problem with JavaScript...

// TypeScript solves this!!

// interface Person {
//   name: string;
//   age: number;
// }

// function printPerson(person: Person) {
//   console.log(`${person.name} is ${person.age} years old`);
// }

// const person: Person = {
//   name: 'John',
//   age: 20,
// };

// printPerson(person);
// printPerson(20); // not allowed!

// What about generic functions?
// function myPrint<T>(arg: T): void {
//   console.log(arg);
// }

// myPrint(person);
// myPrint(20); // both work!

// Generics can get pretty complex pretty quickly, but they are very useful
// We'll see them a lot when working with React

/* ======================================================================================================== */

// What is destructuring?

// We can create variables from the keys of an object
// const { firstName, age } = person;
// console.log(firstName);
// console.log(age);

// We can also create variables from the keys of an object and rename them
// const age = 21;
// const { age: years } = person;
// console.log(years);

// We can also destructure nested objects
// const person2 = {
//   name: {
//     firstName: 'John',
//     lastName: 'Doe',
//   },
//   age: 20,
//   email: 'john@hi',
// };

// const {
//   name: { firstName: fName, lastName },
// } = person2;
// console.log(fName);
// console.log(lastName);

// We can also destructure arrays (very common pattern in React)
// const [one, two, tres] = arr;
// console.log(one);
// console.log(two);
// console.log(tres);

// We can also destructure arrays and ignore some values
// const [uno, , tres] = arr;
// console.log(uno);
// console.log(tres);

// We can also destructure arrays and use the rest operator
// const [first, ...rest] = arr;
// console.log(first);
// console.log(rest);

// Quick asside: What is the spread operator?
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr, ...arr2];
// console.log(arr3);

// The spread operator works on objects and arrays and is used to copy the values of one object or array into another
// Very common and useful pattern
// const person = {
//   firstName: 'John',
//   age: 20,
//   email: 'john@hi',
// };

// const person3 = {
//   ...person,
//   firstName: 'Zavier',
// };
// console.log(person3);

/* ======================================================================================================== */

// Before we learn about anonymous functions, we need to touch on the concept of higher order functions
// Functions are first class citizens in JavaScript, meaning they can be passed around like any other value
// A higher order function is a function that takes in a function as an argument and/or returns a function
// We can also define types that contain functions

// Interface that contains a function
interface Person {
  name: string;
  age: number;
  printPerson: () => void;
}

function createPerson1(name: string, age: number) {
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
const wait = (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// We can now use the async keyword to tell JavaScript that this function is asynchronous
// We can then use the await keyword to tell JavaScript to wait for the asynchronous operation to complete
// before continuing

const waitAndPrint = async () => {
  await wait(2000);
  console.log('I waited 2 seconds for this!');
};

waitAndPrint();
