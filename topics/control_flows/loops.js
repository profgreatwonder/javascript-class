// for - loops through a block of code a number of times
for (let i = 0; i < 5; i++) {
	console.log(i);
}
console.log("loop ended");
//1. i = 0 works like a counter to keep track of how many times we cycle through the loop and run the code inside the loop
//2. i < 5 is a condition that will either evaluate to true or false. The loop will keep going as long as the condition remains true. The loop is terminated the moment the condition is false
//3. Then we have the increment which will execute everytime at the end of the code block. everytime at the end of the code block, we are going to take i and add one to it.
// you might hear the word iteration used a lot. everytime we perform a code block, that is one cycle through the data.

// let's loop through a list of names
let pros = ["Ada", "Jemima", "Joy", "Julia"];
for (let p = 0; p < pros.length; p++) {
	console.log(pros[p]);
	//we reference the name and use [] notation to get each element. if we start from 1, Ada is ignored because it is at position 0
}
console.log("loop ended");

// while - loops through a block of code while a specified condition is true
//1. initialize the variable
//2. set the condition
//3. increment to prevent an infinite loop
let a = 0;
while (a < 5) {
	console.log(a);
	a++; // ake a and add 1 to it
}
let pr = 0;
while (pr < pros.length) {
	console.log(pros[pr]);
	pr++; // ake a and add 1 to it
}

// do/while - also loops through a block of code while a specified condition is true. it is like an extention of the while loop. if the condition is not met, the code will run at least once
let b = 3;
do {
	console.log(`b = ${b}`);
	b++; // ake a and add 1 to it
} while (b < 5);

// for/in - loops through the properties of an object

// for/of - loops through the values of an iterable object
