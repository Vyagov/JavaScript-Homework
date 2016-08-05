
var row, col, firstCol,
table = document.querySelector('table'), 
len = table.querySelectorAll('td').length;

function addRow() {
	var countCol = 1;
	
	row = document.createElement('tr');
	firstCol = document.createElement('td');
	firstCol.innerHTML = "row " + (table.querySelectorAll('tr').length + 1);
	
	row.appendChild(firstCol);
	
	while (countCol < len) {
		row.appendChild(document.createElement('td'));
		countCol++;
	}
	
	table.appendChild(row);
}

document.getElementById('addRow').addEventListener('click', addRow, false);