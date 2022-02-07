//1. query all the elements
//2. iterate over them and give any tag a class of error where error is inside the text and give any tag a class of success where success is inside the text

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
	// if para includes error, addclasslist('error) else, addclasslist('success')
	// let inc = para.innerText;
	if (para.textContent.includes("error")) {
		para.classList.add("errorm");
	} else if (para.textContent.includes("success")) {
		para.classList.add("success");
	}
});
