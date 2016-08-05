
function countOfATags() {
	
	var aTags = document.querySelectorAll("a");
	document.getElementById("result").innerHTML = aTags.length + " anchors";
}