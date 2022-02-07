// adding and changing page content

//1. we target the element that we want effect changes on
let pText = document.querySelector("p");

// 2. we get the text inside that paragraph by using the property, innerText, innerHTML or textcontent
console.log(pText.innerText);
console.log(pText.innerHTML);
// N/B: though innerHTML got the text content, that's not what it is used for. if we have tags inside, it will output them.
console.log(pText.textContent);
// though innerText gets you all the text you need but it won't work when you have hidden content like when you set display to none.

// 2a. to change the content of an element, we take the innerText and set it to something else
pText.innerText = "I'm the new guy";

//2b. In the preceeding example, the text is overwritten. If we just wanted to append to it, we use the += assignment operator
let p2 = document.querySelector("p.msg");
p2.innerText += ". Let me join you here";

//2c. What if we wanted to change the content of several items at once
let manyH2 = document.querySelectorAll("h2");
manyH2.forEach((singleP) => {
	console.log(singleP.innerText);
	singleP.innerText += ". More Text";
});

//3. What if we want to change the HTML inside of say a div tag? we achieve this by using the innerHTML property
let divContent = document.querySelector(".msg2");
console.log(divContent.innerHTML);
// if we want to update it/replace it
// divContent.innerHTML = "<h2>New heading</h2>";
// if we want to append to it
divContent.innerHTML += "<h2>New heading</h2>";

//3b. In this example, we want to cycle through a list from and array and create a new element for each content in the array
let peopleArr = ["Mason", "Tunde", "Joy", "Mercy"];
let peopleList = document.querySelector(".pple");
peopleArr.forEach((person) => {
	peopleList.innerHTML += `<li>${person}</li>`;
});

//4. How do we get and set attributes such as the href?
const link = document.querySelector("a");
// get the attribute that we want to change
console.log(link.getAttribute("href"));
// we set the attribute
link.setAttribute("href", "www.google.com");
// we get the attribute to see the change
console.log(link.getAttribute("href"));
// we can also change the innerText
link.innerText = "Google";
// setting attribute is very useful in forms where we have to give either a success or an error message.
const error = document.querySelector("h5");
error.setAttribute("class", "error");

// here we are creating a style that doesn't exist before
const bgcolor = document.querySelector(".msg");
bgcolor.setAttribute("style", "background-color: green");

// the preceeding example of styling css using JS is not efficient because it will overwrite any previous style that was there
const design = document.querySelector(".sty");
// style.setAttribute("style", "background-color: orange");
// the best way to achieve this in order not to override the previous design is to use the ".style.css_property_name" property to set the new style
console.log(design.style); //fetch the various style option. no hyphen on any of the property name because JS will see it as minus.

console.log(design.style.backgroundColor); // the one we set using setAttribute

// the best way to handle this is:
design.style.backgroundColor = "orange"; // this will retain both the padding and the new style

// we can change the margin that we have set to a 100px
design.style.padding = "100px";

// we can remove a propety by setting it to an empty string
design.style.padding = "";

//-------- setAttribute works best when we want to apply a change coming from a stylesheet. Another method is with the use of classList

// Adding and removing classes using JS (switching between classes)
let switchClass = document.querySelector(".changeClass");
// to see all the classes for this element, we use the classlist property
console.log(switchClass.classList);
// to add a class or classes
switchClass.classList.add("errorm");
switchClass.classList.remove("errorm");

// how to  toggle classes
const toggle = document.querySelector(".toggle");
toggle.classList.toggle("test");
toggle.classList.toggle("test");

// how to access the parent-child relationship(node relationship) in the dom
let section = document.querySelector("section");
// we get the children article by using the children property
console.log(section.children);
// we see that it returns an HTML collection. if we wanted to cycle through, we can't use the foreach, so we first convert into an array before iterating. we use Array.from and pass in what we intend to convert to an array
console.log(Array.from(section.children));
// we see that we have an array. it is not destructive which means that it returns a new value but doesn't change the initial value. we3 can check this by logging to the console,
// console.log(section.children);
// to iterating over an array to do something
Array.from(section.children).forEach((sect) => {
	sect.classList.add("sect-elements");
});

// if I want to find out an element's parents or parent's parent, in this case h2;
const h2 = document.querySelector("h1");
console.log(h2.parentElement);
// console.log(h2.parentNode);
// we can chain on properties. here we are looking for the parent parent(grandparent).
console.log(h2.parentElement.parentElement);

// now we will attempt to access sibling elements
console.log(h2.nextElementSibling);
// console.log(h2.nextSibling); gives more info about the nextElementSibling
// we can also check the previous sibling
console.log(h2.previousElementSibling); // it returns null because it doesn't have a previous sibling. we can add an element before it, to get it a previous sibling.

// let's do some extra chaining;
console.log(h2.nextElementSibling.parentElement.children); // this will return an html collection.

// you can fetch stuffs like; first child, last child, etc.
console.log(section.firstChild);
//or console.log(section.firstElementChild);
console.log(section.lastChild);
// console.log(h2.appendChild(`<h1>Hi</h1>`));
