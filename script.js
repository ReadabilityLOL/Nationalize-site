const form = document.getElementById('.form');

form.addEventListener('submit', submitFunc);

function submitFunc(event){
	event.preventDefault();

	const formdata = new FormData(event.target);
	
	const formObj = Object.fromEntries(formdata.entries());
	console.log(formObj);
}
