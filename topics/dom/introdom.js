// in our browser console, when we type in document, the document you see is created by the browser and it models the HTML page

// the document has properties and methods and it is achieved by typing in "document." e.gs of properties include, .location, .URL, etc. e.gs of methods include, .getElementById, etc.

// The DOM also describes how a document looks visually. The DOM describes our HTML page in a hierarchy of trees of nodes. What this means is that it considers the elements as a node. HTML (root node because it is the very top element in our document) | head and the body | Head -> title and Body -> div, h1, p, etc. In the title, or h1, or p tags, we have texts and they are called text-nodes while the elements that hold the texts are called element nodes. To interact with the web page, we use the DOM to reach into these tree of nodes and we get a reference to a particular node. When we find a reference to for eg p tag, we then go ahead to use the different methods to change it's contents or change it's style or remove it, etc.

// Steps in Accessing the DOM
// 1. You have to decide which element you want to change, add to, or remove from. We then reach into the DOM and get a reference on that element. This is known as querying the DOM.
// 2. We then do something with the element like change, add or remove

// Back in our html, we are going to reach in, get the first p tag and get a reference on it. We will then assign it a variable. remember that we use the document object whenever we want to manipulate the web page. Then we use the method (querySelector) which can grab an id, class or tag.
let pTag = document.querySelector("p"); //grabs the first
console.log(pTag);
let p2Tag = document.querySelector(".msg"); //grabs the first
console.log(p2Tag);
let divTag = document.querySelector("div.msg"); //grabs the first
console.log(divTag);

// if you're not sure of the selector to use, go into the elements tabs in inspect, select the element and right-click on the element, select "copy" and then choose "copy selector"
let pMTag = document.querySelector("body > div:nth-child(1) > p:nth-child(2)"); //grabs the first
console.log(p2Tag);

// In a case where we need to grab multiple elements, we use another querySelector variant called querySelectorAll. which can also grab an id, class or tag. Let's try grab all the p tags
let allPTags = document.querySelectorAll("p");
console.log(allPTags);
// it returns a nodelist which looks very much like an array but isn't because you cannot use any of the array methods on it but we can select individual elements from it like in array.
console.log(allPTags[0]);
// we can also use the foreach method on it
allPTags.forEach((pT) => {
	console.log(pT);
});

// let's do the same for the msg class
let allMsg = document.querySelectorAll(".msg");
console.log(allMsg);

// there are other ways to query the DOM and they include,
// get element by id, get element by class name, get element by tag name.
// 1. getElementById
let single = document.getElementById("single"); //no need for #
console.log(single);
// 2. getElementByClassName
let pClass = document.getElementsByClassName("pclass"); //no need for .
console.log(pClass); // this will return an HTML collection. Like an array, you can select an element by position but we can't run a foreach method on it.
// 3. getElementByTagName
let pTags = document.getElementsByTagName("p"); //no need for .
console.log(pTags.length);

// the querySelector/querySelectorAll is a personal favorite because it is flexible and we can query any element we need using them. the chief advantage is that we can carry out the foreach method on nodelist which the querySelector/querySelectorAll returns (this cannot be done with others which returns html collections).
