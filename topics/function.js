// function are a block of code to do something that can be called or invoked at any time in your code. Methods are functions that carry out an action on a data type.functions and method differ in where they are written and in how they are called.
// function sayHi(name, time) {
// 	console.log(`Hello ${name}, good ${time}`);
// }

// sayHi("Jason", "morning");

function sayHi(name = "Joy", time = "evening") {
	console.log(`Hello ${name}, good ${time}`);
}

sayHi();
sayHi("Jason", "morning");
sayHi("Jason");

let circum = function (r) {
	// let circumCircle = 2 * Math.PI * Math.pow(r, 2);
	// return circumCircle;
	// or
	return 2 * Math.PI * Math.pow(r, 2);
};

// /NB/ the return keyword makes it possible for us to use the result later in the code. with console.log(), we can't use the value logged to the console because it is local to the function
// console.log(circum(r));

// circum(r); r is not defined bcos it is local to this scope. It only gets to work when we pass to a variable
let result = circum(10);
console.log(result);

// rewrite the arrow function
let circumA = (radius) => 2 * Math.PI * Math.pow(radius, 2);
let resultA = circumA(10);
console.log(resultA);
// N/B: if we have a single parameter, we can remove the parethesis. If we have more than one or no parameter at all, we have to leave the parenthesis.

// The block of code after the arrow can span multiple lines.

// Foreach Methods and Callbacks
// Callback function is a function that is a function that pass as an argument to another function or another method.

// Foreach Method
let people = ["Joy", "Peace", "Anu", "Rasheed"];
people.forEach(function (person) {
	console.log(person);
});

// or
people.forEach((person, index) => {
	console.log(index, person);
});

// or

let printPerson = (person, index) => {
	console.log(`${index} - Hello ${person}`);
};
console.log(people.forEach(printPerson));
