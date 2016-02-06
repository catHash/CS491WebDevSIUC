function initCoins() {
	totalheads = 0;
	totaltails = 0;
	lastflip = "";
	flipstreak = 0
}
function coinflip() {
if (Math.random() < 0.5) {
	document.getElementById("lastflip").value = "heads";
	if (lastflip == "heads"){
		flipstreak++
		document.getElementById("flipstreak").value = flipstreak + " heads";
	}else{
		flipstreak = 1;
		document.getElementById("flipstreak").value = "1 head";
	}
	lastflip = "heads"
	totalheads++;
}else {
	document.getElementById("lastflip").value = "tails";
	if (lastflip == "tails"){
		flipstreak++
		document.getElementById("flipstreak").value = flipstreak + " tails";
	}else{
		flipstreak = 1;
		document.getElementById("flipstreak").value = "1 tail";
	}
	lastflip = "tails"
	totaltails++;
}
	document.getElementById("totalflips").value = totalheads + totaltails;
	document.getElementById("headflips").value = totalheads;
	document.getElementById("tailflips").value = totaltails;
}
function resettotals() {
	totalheads = 0;
	totaltails = 0;
	lastflip = "";
	flipstreak = 0;
	document.getElementById("lastflip").value = "";
	document.getElementById("flipstreak").value = "0 coins";
	document.getElementById("totalflips").value = totalheads + totaltails;
	document.getElementById("headflips").value = totalheads;
	document.getElementById("tailflips").value = totaltails;
}