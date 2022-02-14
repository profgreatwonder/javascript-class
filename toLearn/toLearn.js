let addPath = document.querySelector(".add");

let list = document.querySelector(".learns");

let searchBar = document.querySelector(".search input");

let generateList = (techSub) => {
	//3
	const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${techSub}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

	list.innerHTML += html;
};

// 1.
addPath.addEventListener("submit", (e) => {
	e.preventDefault();
	const techSub = addPath.add.value.trim(); //2
	// console.log(techSub);
	if (techSub.length) {
		//5
		generateList(techSub); //4
		addPath.reset(); //6
	}
});

// 7. delete todo
list.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete")) {
		e.target.parentElement.remove();
	}
});

// 9.
const filterS = (searchTerm) => {
	// console.log(searchTerm);
	// we need a list of the todo, we want to cycle through them. let's log out the children of the learn list (ul) and see what we are getting
	// we will be using the filter method to go through all of the todos in the list of LIs and fire the callback function inside the filter method for each todo. it returns a new array which is whatever item we keep in it. we keep an item by returning true and we filter it out by returning false. in our ccase, we will filter out the ones that has a match cos we aren't planning to do anything with it. the one that does have a class, we want to apply a class to it.
	Array.from(list.children)
		.filter((numList) => {
			// console.log(numList.textContent);
			// console.log(!numList.textContent.includes(searchTerm));
			//numlist, individual items as we iterate through
			// console.log(numList.textContent);
			// we want to compare the searchTerm against the text content
			// return numList.textContent.includes(searchTerm); // this will return true or false. true if the numList contains the term but remember that we want to do the opposite so that we can apply a class to it. we just simply negate it,th en cycle through to apply a class to the ones that doesn't match.
			return !numList.textContent.includes(searchTerm);
		})
		.forEach((numList) => {
			numList.classList.add("filtered");
		});

	Array.from(list.children)
		.filter((numList) => {
			// console.log(numList.textContent);
			return numList.textContent.includes(searchTerm);
		})
		.forEach((numList) => {
			numList.classList.remove("filtered");
		});
};

// 8. search funcitonality. target first above, then we listen for a keyup event
searchBar.addEventListener("keyup", () => {
	//get the user's input
	const searchTerm = searchBar.value.trim();

	//next we create a function that will take the search term and match it against the todo and filter them. the function will be above this function to have a more reusable code.

	filterS(searchTerm);
});
