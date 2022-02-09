//1. We need to query the dom to get the element
// where we expect the event to happen which in
// this case is the button.
const addBtn = document.querySelector(".addBtn");
const ulBlock = document.querySelector(".ulBlock");
// console.log(addBtn);

// 2. Next, we add an event listener to the element
// what it does is to listen acitvely for events
// on a specific element. this method takes in 2
// parameters, a. the event you want to listen to
// (in this case a click event) and b. a callback
// function. This function fires when the event
// occurs when the click event happens on the
// button.
// 3. Finally, we write a callback function which
// will fire when t hat event happens such as
// clicking on a button in this case
addBtn.addEventListener("click", () => {
	// console.log("click");
	// we could add to it using
	// ulBlock.innerHTML += "<li>new list</li>";
	// another way is to do this is
	const liElement = document.createElement("li");
	// next we need to get the text content of the
	// element we just created.
	liElement.textContent = "new item";
	// next, we want to insert it into the dom.
	// we either append or prepend it to the parent.
	ulBlock.append(liElement);
	// ulBlock.prepend(liElement);
});

// In this example, we want to attach an
// eventlistener to each of the li tag so that
// it will be deleted from the list.
// we will fetch all the li tags first
const listItems = document.querySelectorAll(".items");

// now we can perform a foreach on the nodelist
// returned and attach an eventlistener on each
// one of them by cycling through them.
// listItems.forEach((listItem) => {
// 	listItem.addEventListener("click", (e) => {
// 		// console.log("listItem clicked");
// 		// console.log(e);
// 		// console.log(e.target);
// 		// console.log(listItem);
// 		// e.target.style.textDecoration = "line-through";
// 		e.target.remove();

// 		console.log("ul");
// 		// to stop the event from bubbling up, we
// 		//use the stopPropagation.
// 		e.stopPropagation();
// 	});
// });

ulBlock.addEventListener("click", (e) => {
	// with event bubbling, we don't need to target the
	// li
	// console.log(e.target);
	// console.log(e);
	// what we want to check is if what we are
	// deleting is an li tag
	if (e.target.tagName === "LI") {
		e.target.remove();
	}
});
// now that we have succeccfully cycled through
// the items. we need to be able identify the
// particular item we are deleting. when a click
// event occurs inside the browser, the browser
// gives automatically gives us a parameter called
// E or events you can call it what you want but
// it is an event object called E. we add the e
// inside the event arrow function. the e contains
// info about the event that happened on the web
// page. let us log e to the console and we see
// the pointer event. the property we want to use
// is the target property. we can also log to the
// console 'listItem' to find the individual
// property. '.target' is preferable since we don't
// always cycle through items. it also helps with
// event delegation. for now we will use css to
// cancel each item.

// the next thing we want to do is delete/remove
// elements from the DOM.
// a simple example of removing something from the
// DOM is the .remove() method.
// const ul = document.querySelector("ul");
// ul.remove();
// we will go on to apply this to our code.

// next we want to add items. what we will do is
// to target the add button which we have already
// done. we also need to target the ul(cos that's
// where we add the element to).
// we don't need the event object in any of these.

// next, we want to be able to delete the newly
// added list. this is not currently possible
// because the eventlisteners were not attached to
// the newly added list item. we handle this with
// something called event bubbling. the event starts
// at the target and bubbles up to see if there
// are any event listeners attached to the parent
// and upwards. it will then fire the callback
// function for those events too. this is called
// event bubbling.
