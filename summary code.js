var result = getField("summary_line1");
var upholsteryOption = getField("upholsteryOption").value;
var legs = getField("legs").value;
var tufting = getField("tufting").value;
var grid = getField("grid").value;
var top = getField("topstitch").value;
var double = getField("doublestitch").value;
var sleeper = getField("sleeper").value;
var backFill = getField("backFill").value;
var seatFill = getField("seatFill").value;
var mainUpholstery, connectors, exLength, exDepth, upholstery, skirtStyle, newStyle, styleChanges,
legDetails, finish, tuftingDetails, grid, topstitchOption, doublestitchOption, nailheadsOption, armcapsOption, sleeperDetails,
backFillDetails, foamBackOption, seatFillDetails;

//fabric, leather, com
if (getField("mainUpholstery").value != "Off")
	mainUpholstery = getField("mainUpholstery").value;
	else mainUpholstery = "";

//connectors
if (getField("connectors").value != "")
	connectors = ",\n" + getField("connectors").value + " Connectors";
	else connectors = "";

//ex length
if (getField("exLength").value != "")
	exLength = ",\nEx. " + getField("exLength").value + " Inches";
	else exLength = "";

//ex depth
if (getField("exDepth").value != "")
	exDepth = ",\nEx. Depth";
	else exDepth = "";

//upholstery option
switch(upholsteryOption) {
	case 'Upholstered' :
		upholstery = ",\n" + getField("upholsteryOption").value;
		skirtStyle = "";
		break;
	case 'Upholstered w/ Skirt' :
		upholstery = ",\n" + getField("upholsteryOption").value;
		skirtStyle = "\n(" + getField("uphSkirtStyle").value + " Skirt)";
		break;
	case 'Slipcovered' :
		upholstery = ",\n" + getField("upholsteryOption").value;
		skirtStyle = "\n(" + getField("slipSkirtStyle").value + " Skirt)";
		break;
	default :
		upholstery = "";
		skirtStyle = "";
}

//new style
if (getField("newStyle").value == "Yes")
	newStyle = ",\n" + "New Style";
else newStyle = "";

//style changes
if (getField("styleChanges").value != "")
	styleChanges = ",\n" + "Style Change(s)"
else styleChanges = "";

//legs
switch(legs) {
	case 'std' :
		legDetails = ",\n" + "Std. Wood Legs";
		finish = ",\n(" + getField("legFinish_wood").value + ")";
		break;
	case 'wBase' :
		legDetails = ",\n" + getField("wBaseClass").value;
		finish = ",\n(" + getField("legFinish_wood").value + ")";
		break;
	case 'metal' :
		legDetails = ",\n" + getField("metalLegsClass").value;
		finish = ",\n(" + getField("legFinish_metal").value + ")";
		break;
	case 'swivel' :
		legDetails = ",\n" + "Swivel Or Rocker Base";
		finish = "";
		break;
	default :
		legDetails = "";
		finish = "";
}

//leg finish
switch(legs) {
	case 'std' :
		finish = ",\n(Finish: " + getField("legFinish_wood").value + ")";
		break;
	case 'wBase' :
		finish = ",\n(Finish: " + getField("legFinish_wood").value + ")";
		break;
	case 'metal' :
		finish = ",\n(Finish: " + getField("legFinish_metal").value + ")";
		break;
	default :
		finish = "";
}

//tufting
switch(tufting) {
	case 'Yes' :
		tuftingDetails = ",\n" + getField("tuftStyle").value + " Tufted " + getField("tuftArea").value;
		break;
	default :
		tuftingDetails = "";
}

//grid
switch (grid) {
	case 'Yes' :
		gridDetails = ",\nGrid Seams On " + getField("gridArea").value;
		break;
	default :
		gridDetails = "";
}

//topstitch
switch (top) {
	case 'Yes' :
		topstitchOption = ",\nTop Stitch Seams";
		break;
	default :
		topstitchOption = "";
}

//doublestitch
switch (double) {
	case 'Yes' :
		doublestitchOption = ",\nDouble Stitch Seams";
		break;
	default :
		doublestitchOption = "";
}

//nailheads
if (getField("nailheads").value != "")
	nailheadsOption = ",\nNailheads";
else nailheadsOption = "";

//armcaps
if (getField("armcaps").value != "")
	armcapsOption = ",\nPair(s) of Arm Caps";
else armcapsOption = "";

//sleeper
if (sleeper == "Yes")
	sleeperDetails = ",\nSleeper (" + getField("sleeperSize").value + ")";
else sleeperDetails = "";

//back fill
switch (backFill) {
	case 'stdPoly' :
		backFillDetails = ",\nStd. Poly Backs";
		break;
	case 'lifetimePoly' :
		backFillDetails = ",\nLifetime Poly Backs";
		break;
	case 'trillium' :
		backFillDetails = ",\nTrillium Backs";
		break;
	case 'ten90' :
		backFillDetails = ",\n10/90 Backs";
		break;
	case 'tight' :
		backFillDetails = ",\nTight-Back Style";
		break;
	default :
		backFillDetails = "";
}

//foam backs
if (getField("foamBacks").value == "Yes")
	foamBackOption = ",\nFoam Backs";
else foamBackOption = "";

//seat fill
switch (seatFill) {
	case 'stdFoam' :
		seatFillDetails = ",\nStd. Foam Seats";
		break;
	case 'premFoam' :
		seatFillDetails = ",\nPremium Foam Seats";
		break;
	case 'trillium' :
		seatFillDetails = ",\nTrillium Seats";
		break;
	case 'ten90' :
		seatFillDetails = ",\n10/90 Seats";
		break; 
	default :
		seatFillDetails = "";
}

//result
result.value = mainUpholstery + connectors + exLength + exDepth + upholstery + skirtStyle + newStyle + styleChanges
+ legDetails + finish + tuftingDetails + gridDetails + topstitchOption + doublestitchOption + nailheadsOption + armcapsOption
+ sleeperDetails + backFillDetails + foamBackOption + seatFillDetails;

//END

