

document.getElementById('country').addEventListener('change', function() {
	var x = document.getElementById("country").value;

	if (x == "other") {
		document.getElementById('other').style.visibility = "visible";
	}
});

document.getElementById("firstName").addEventListener('input', function() {
	var x = document.getElementById("firstName");
	
	if (x.value == null || x.value == "") {
		document.getElementById("fn").innerHTML = "Input First Name!";
    	x.style.background = "red";
    } else {
    	document.getElementById("fn").innerHTML = '';
		x.style.background = '';
    }
});

document.getElementById("lastName").addEventListener('input', function() {
	var x = document.getElementById("lastName");
	
	if (x.value == null || x.value == "") {
		document.getElementById("ln").innerHTML = "Input Last Name!";
    	x.style.background = "red";
    } else {
    	document.getElementById("ln").innerHTML = '';
		x.style.background = '';
    }
});

document.getElementById("email").addEventListener('input', function() {
	var x = document.getElementById("email");
	
	if (x.value == null || x.value == "") {
		document.getElementById("em").innerHTML = "Input valid E-mail!";
    	x.style.background = "red";
    } else {
    	document.getElementById("em").innerHTML = '';
		x.style.background = '';
    }
});

document.getElementById("phone").addEventListener('input', function() {
	var x = document.getElementById("phone");
	
	if (isNaN(x.value) || x.value < 0) {
		document.getElementById("ph").innerHTML = "Input valid phone number!";
    	x.style.background = "red";
    } else {
    	document.getElementById("ph").innerHTML = '';
		x.style.background = '';
    }
});

document.getElementById("mess").addEventListener('input', function() {
	var x = document.getElementById("mess");
	
	if (x.value == null || x.value == "") {
		document.getElementById("mss").innerHTML = "Input a message!";
    	x.style.background = "red";
    } else {
    	document.getElementById("mss").innerHTML = '';
		x.style.background = '';
    }
});


