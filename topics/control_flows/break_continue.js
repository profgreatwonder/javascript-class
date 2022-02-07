let personScore = [30, 10, 50, 100, 60, 70];

for (i = 0; i < personScore.length; i++) {
	// console.log(`1. you scored ${personScore[i]}%`);

	// we could skip an iteration by using the continue keyword. here we want to skip the personScore at 10
	if (personScore[i] === 10) {
		// console.log(`2. awwwn, you scored ${personScore[i]}%, please try again`);
		continue;
	}

	console.log(`1. you scored ${personScore[i]}%`);
	// if we wanted to break out of the loop the moment the user reaches 100, we use the break keyword
	if (personScore[i] === 100) {
		console.log(`3. congratulations, you scored a ${personScore[i]}%`);
		break; // without it, we will be displaying 60% and 70%
	}
}
