
var images = document.getElementById('myDiv').getElementsByTagName('img');
var len = images.length;

for (var i = 0; i < len; i++) {
	
	images[i].addEventListener("mouseover", function() {
		this.style.width = "300px";
	    this.style.height = "400px";
	});
	
	images[i].addEventListener("mouseout", function() {
		this.style.width = "80px";
	    this.style.height = "107px";
	});
}
