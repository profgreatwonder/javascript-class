let time = new Date();
let hrs = time.getHours();

// if
if (hrs < 12) {
	console.log(`good morning, we are in the ${hrs} hour`);
}

// if_else
if (hrs < 12) {
	console.log(`good morning, we are in the ${hrs} hour`);
} else {
	console.log(`its ${hrs} hours`);
}

// else_if
if (Math.random() * 25 > hrs) {
	console.log(`good morning, its ${hrs} hours`);
} else if (Math.random() * 25 < hrs) {
	console.log(`good afternoon, its ${hrs} hours`);
} else {
	console.log("good evening");
}

// multiple conditions (logical operators)
let age = 18;

if (age === 18 && age >= 18) {
	console.log(`since you are ${age} and above, please vote`);
}

if (age < 18 || age >= 18) {
	console.log(`since you are not ${age} years, don't vote`);
}

if (age < 18 && age >= 18) {
	console.log(`since you are ${age} and above, please vote`);
}

let students = ["Joy", "Mercy", "Peter", "James"];
// console.log(pros.length);
if (students.length >= 4) {
	students.forEach((student) => {
		console.log(student);
	});
	// console.log();
}

let email = "2@@234";
if (email.length !== 8 && email.includes("@")) {
	console.log("too short");
}

// // logical not
console.log(true); //true
console.log(false); //false
console.log(!true); //false
console.log(!false); //true

let uname = false;
if (uname) {
	// this evaluates to false
	console.log("please log in");
} else if (!uname) {
	// this evaluates to true
	console.log("logged in");
}
