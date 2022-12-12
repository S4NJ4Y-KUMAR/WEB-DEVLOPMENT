
const api = "https://api.exchangerate-api.com/v4/latest/USD";


var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;


fromCurrecy.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});


toCurrecy.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);


function updateValue(e) {
	searchValue = e.target.value;
}


convert.addEventListener("click", getResults);


function getResults() {
	fetch(`${api}`)
		.then(currency => {
			return currency.json();
		}).then(displayResults);
}


function displayResults(currency) {
	let fromRate = currency.rates[resultFrom];
	let toRate = currency.rates[resultTo];
	finalValue.innerHTML =
	((toRate / fromRate) * searchValue).toFixed(2);
	finalAmount.style.display = "block";
}


function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};
function myFunction(event) {
          if (event.key == '0' || event.key == '1'
              || event.key == '2' || event.key == '3'
              || event.key == '4' || event.key == '5'
              || event.key == '6' || event.key == '7'
              || event.key == '8' || event.key == '9'
            )
              document.getElementById("oamount").value += event.key;
      }
