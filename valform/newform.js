let validButton = document.querySelector(".btn");
let form = document.querySelector(".form");

// console.log(validButton);
validButton.addEventListener("click", (e) => {
	e.preventDefault();
	// console.log(e.target);
	let formname = document.forms["newform"]["name"].value.toLowerCase().trim();
	// console.log(formname);
	let formemail = document.forms["newform"]["email"].value.toLowerCase().trim();
	// console.log(formemail);
	let initialpass = document.forms["newform"]["initpass"].value
		.toLowerCase()
		.trim();
	let finalpass = document.forms["newform"]["pass"].value.toLowerCase().trim();

	// 	// or you can also fetch form fields like this
	// 	// 	// let formname = newform.name.value;
	// 	// 	// let formemail = newform.email.value;
	// 	// 	// let initialpass = newform.initpass.value;
	// 	// 	// let finalpass = newform.pass.value;

	// fetch the error fields
	let name_error = document.getElementById("error_name");
	let email_error = document.getElementById("error_email");
	let initialpasswError = document.getElementById("error_initpass");
	let password_error = document.getElementById("error_pass");
	var regex = /^[a-zA-Z]{6, 1}$/;

	if (formname === "") {
		name_error.textContent = "please enter your name";
	} else if (regex.test(formname) === false) {
		name_error.textContent = "Please enter a valid name";
	} else {
		name_error.textContent = "";
	}

	if (formemail === "") {
		email_error.textContent = "please enter your email";
	} else {
		email_error.textContent = "";
	}

	if (initialpass === "") {
		initialpasswError.textContent = "please enter a password";
	} else if (finalpass === "") {
		password_error.textContent = "please confirm your password";
	} else if (initialpass !== finalpass) {
		password_error.textContent = "password does not match";
	} else {
		initialpasswError.textContent = "";
		password_error.textContent = "";
	}

	form.reset();
});

console.log("chil \n dren");
