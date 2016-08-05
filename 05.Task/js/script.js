var r, x;

function volumeOfASphere() {
	r = document.getElementById("radius").value;
	
	if (r < 0) {
		alert('Input positive Radius!!!');
		x = 0;
	}
	
	if (r > 0) {
		x = 4 / 3 * Math.PI * Math.pow(r, 3);
	}
	
	document.getElementById("result").value = x.toFixed(4);
}