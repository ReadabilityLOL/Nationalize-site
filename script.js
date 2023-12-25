let input = document.querySelector("input");
let submit = document.querySelector(".submit");
let output = document.querySelector(".output");

const apiUrl = "https://api.nationalize.io?name=";

submit.addEventListener('click',(e) => {	
	if(input.value == ""){
	} else {
		fetch(apiUrl+input.value.trim())
			.then(response => {
				if(!response.ok){
					throw new Error("Network response not ok :(");
				}
				return response.json();
			})
			.then(data => {
				output.textContent = `You are probably from: ${data.country[0].country_id}`;
				output.textContent += `\nCertainty: ${data.country[0].probability*100}%`;
				console.log(data.country[0].country_id);
				console.log(data.country[0].probability);
			})
			.catch(error => {
    				console.error('Error:', error);
  			});

	}
});
