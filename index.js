const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e44519d7dcmsh58546a138b3d6abp199d1ejsn70b82094198a',
		'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};

async function fetchQuote() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		document.getElementById("quote").innerHTML = result.text; 
		document.getElementById("author").innerHTML = result.author;
	} catch (error) {
		alert(error.message);
	}
}

fetchQuote();