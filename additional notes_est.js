var notes = getField("additionalNotes");
var notes_est = getField("notes_est");
var topstitch, doublestitch, nailPlacement;
//topstitch
if (getField("topstitch").value === "Yes"){
	topstitch = "*Top Stitch All Seams\n\n";
} else {
	topstitch = "";
}

//doublestitch
if (getField("doublestitch").value === "Yes"){
	doublestitch = "*Double Stitch All Seams\n\n";
} else {
	doublestitch = "";
}

//nailhead placement
if (getField("nailheadPlacement").value != ""){
	nailPlacement = "Nailheads: " + getField("nailheadPlacement").value + "\n\n";
} else {
	nailPlacement = "";
}

//result value
notes_est.value = 
topstitch +
doublestitch +
nailPlacement +
notes.value;