
function reloadPage() {
	location.reload();
}

function randomImages() {
	
	document.write("<img src=\"images/" + Math.floor(1 + Math.random() * 15) + ".jpg\" />");
}

randomImages();