
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3],
zeroArr = [],
len = array.length,
max = 0,
symbol = "",
ind;

function mostFrequentlyMet() {
	
	for (ind in array) {
		zeroArr[array[ind]] = 0;
	}
	
	for (ind in array) {
		zeroArr[array[ind]]++;
	}
	
	for (ind in zeroArr) {
		if (zeroArr[ind] > max) {
			max = zeroArr[ind];
			symbol = ind;
		}
	}
	
	document.getElementById("result").innerHTML = symbol + " (" + max + " times)";
}

