function validate() {
	var name = document.forms["formval"]["name"].value;
	var initialpassword = document.forms["formval"]["initialpassword"].value;
	var password = document.forms["formval"]["password"].value;
	var email = document.forms["formval"]["email"].value;

	document.getElementById("name_error").innerHTML = " ";
	document.getElementById("email_error").innerHTML = " ";
	document.getElementById("initialpass_error").innerHTML = " ";
	document.getElementById("pass_error").innerHTML = " ";

	if (name == "") {
		// printError("name_error", "Please enter your name");
		document.getElementById("name_error").textContent =
			"Please enter your name";
		// return false;
	} else {
		var regex = /^[a-zA-Z\s]+$/;
		if (regex.test(name) === false) {
			// printError("name_error", "Please enter a valid name");
			document.getElementById("name_error").innerHTML =
				"Please enter a valid name";

			// return false;
		}
	}

	if (email == "") {
		document.getElementById("email_error").innerHTML =
			"Please enter your email";
		// return false;
	}

	if (initialpassword == "") {
		// valid = false;
		document.getElementById("initialpass_error").innerHTML =
			"Password is required.";
		// return false;
	}

	if (password == "") {
		// valid = false;

		document.getElementById("pass_error").innerHTML = "Password is required.";
		return false;
	}

	if (initialpassword != password) {
		// valid = false;
		document.getElementById("pass_error").innerHTML =
			"Both passwords must be same.";
		return false;
	}
}
