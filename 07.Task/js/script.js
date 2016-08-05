var x, from, to, weight, result;

function convert() {
	
	x = document.getElementById("input").value;
	from = document.getElementById("from");
	to = document.getElementById("to");
	weight = from.options[from.selectedIndex].text;
	
	if (weight == "kg") {
		to.options[to.selectedIndex].text = "lb";
		result = x * 2.20462262 + " lb";
	}
	
	if (weight == "lb") {
		to.options[to.selectedIndex].text = "kg";
		result = x / 2.20462262 + " kg";
	}
	
	document.getElementById("result").innerHTML = result;
}

