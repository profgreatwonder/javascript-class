// this is used when you have tons of condition you want to check. In this case, if_else might not be efficient.

// let today = new Date().getDay();
// console.log(today);
// switch (today) {
// 	case "Sunday":
// 		console.log(`today is ${today}`);
// 	case "Monday":
// 		console.log(`today is ${today}`);
// 	case "Tuesday":
// 		console.log(`today is ${today}`);
// 	case "Wednesday":
// 		console.log(`today is ${today}`);
// 	case "Thursday":
// 		console.log(`today is ${today}`);
// 	case "Friday":
// 		console.log(`today is ${today}`);
// 	case "Saturday":
// 		console.log(`today is ${today}`);
// }

let today = new Date().getDay();

switch (today) {
	case 0:
		console.log(`today is Sunday`);
		break; // to avoid others from running
	case 1:
		console.log(`today is Monday`);
		break; // to avoid others from running
	case 2:
		console.log(`today is Tuesday`);
		break; // to avoid others from running
	case 3:
		console.log(`today is Wednesday`);
		break; // to avoid others from running
	case 4:
		console.log(`today is Thursday`);
		break; // to avoid others from running
	case 5:
		console.log(`today is Friday`);
		break; // to avoid others from running
	case 6:
		console.log(`today is Saturday`);
		break; // to avoid others from running
	default:
		console.log(`today is Saturday`);
}

let score = 70;

switch (true) {
	case score > 50:
		console.log(`excellent`);
		break; // to avoid others from running
	case score < 65:
		console.log(`very good`);
		break; // to avoid others from running
	case score < 60:
		console.log(`good`);
		break; // to avoid others from running
	case score < 50:
		console.log(`pass`);
		break; // to avoid others from running
	case score < 40:
		console.log(`pass`);
		break; // to avoid others from running
	default:
		console.log(`not a valid grade`);
		break; // to avoid others from running
}

// more efficient solution will be to use the if_else statement, tacking on conditions.

var mark = 70;

if (mark >= 70) {
	console.log("excellent grade");
} else if (mark < 70 && mark >= 65) {
	console.log("good grade");
} else if (mark < 65 && mark >= 50) {
	console.log("pass");
}

// switch statements use strict equality in checking conditions
