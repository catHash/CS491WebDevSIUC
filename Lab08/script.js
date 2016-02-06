function handleinput() {
	startnumber = document.getElementById("startnumber").value
	endnumber = document.getElementById("endnumber").value
	var oldtable = document.getElementById("mytable");
	if (oldtable) oldtable.parentNode.removeChild(oldtable);
	var table = document.createElement("table");
	table.setAttribute("id", "mytable");
	var tableBody = document.createElement("tbody");
	var row = document.createElement("tr");
	var cell = document.createElement("td"); 
	var cellText = document.createTextNode("Number"); 
	cell.style.fontWeight = 'bold';
	cell.appendChild(cellText);
    row.appendChild(cell);
	var cell = document.createElement("td"); 
	var cellText = document.createTextNode("Square");
	cell.style.fontWeight = 'bold';
	cell.appendChild(cellText);
    row.appendChild(cell);
	var cell = document.createElement("td"); 
	var cellText = document.createTextNode("Cube");
	cell.style.fontWeight = 'bold';	
	cell.appendChild(cellText);
    row.appendChild(cell);
	tableBody.appendChild(row);			 
	for (var j = parseInt(startnumber); j <= parseInt(endnumber); j++) {
		console.log(j)
		var row = document.createElement("tr");
		var cell = document.createElement("td");    
        var cellText = document.createTextNode(j); 
		cell.appendChild(cellText);
        row.appendChild(cell);
		var cell = document.createElement("td");    
        var cellText = document.createTextNode(calculatesquare(j)); 
		cell.appendChild(cellText);
        row.appendChild(cell);
		var cell = document.createElement("td");    
        var cellText = document.createTextNode(calculatecube(j)); 
		cell.appendChild(cellText);
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
	document.body.appendChild(table);
	table.setAttribute("border", "1");
}
function calculatesquare(n) {
	return (n*n)
}
function calculatecube(n) {
	return (n*n*n)
}