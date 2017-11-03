var legs = getField("legs");
var back = getField("backFill");
var seat = getField("seatFill");
var uph = getField("upholsteryOption");
var uphSkirtStyle = getField("uphSkirtStyle");
var slipSkirtStyle = getField("slipSkirtStyle");
var style = getField("styleOption");
var styleType = getField("stdOrCustom");

//if style is normal, including upgrades
if(styleType.value === "std"){
	
//upholstery option
	switch (styles[style.value].uphStyle) {
			case 'uph':
				uph.value = 'Upholstered';
				break;
			case 'pocketSkirt':
				uph.value = 'Upholstered w/ Skirt';
				uphSkirtStyle.value = "Pocket";
				break;
			case 'watefallSkirt':
				uph.value = 'Upholstered w/ Skirt';
				uphSkirtStyle.value = "Waterfall";
				break;
			case 'pocketSlip':
				uph.value = 'Slipcovered';
				slipSkirtStyle.value = "Pocket";
			break;
			case 'waterfallSlip':
				uph.value = 'Slipcovered';
				slipSkirtStyle.value = "Waterfall";
			break;
	}

//leg style
	switch (styles[style.value].legStyle) {
			case 'std':
				legs.value = 'std';
				break;
			case 'baseCl1':
				legs.value = 'wBase';
				wBaseType.value = 'Wood Base (Class 1)';
				break;
			case 'baseCl2':
				legs.value = 'wBase';
				wBaseType.value = 'Wood Base (Class 2)';
				break;
			case 'metalCl1':
				legs.value = 'metal';
				metalLegsType.value = 'Metal Legs (Class 1)';
				break;
			case 'metalCl2':
				legs.value = 'metal';
				metalLegsType.value = 'Metal Legs (Class 2)';
				break;
			default:
				legs.value = "";
				break;
	}

//tight back
	if (styles[style.value].backStyle === "tight"){
		back.value = 'tight';
	}

//button tuft
	switch (styles[style.value].buttonTuft) {
			case 'seat':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Button';
				getField("tuftArea").value = 'Seat(s)';
				break;
			case 'back':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Button';
				getField("tuftArea").value = 'Back (/Arms)';
				break;
			case 'both':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Button';
				getField("tuftArea").value = 'Seats & Backs';
				break;
	}


//blind tuft
	switch (styles[style.value].blindTuft) {
			case 'seat':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Blind';
				getField("tuftArea").value = 'Seat(s)';
				break;
			case 'back':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Blind';
				getField("tuftArea").value = 'Back (/Arms)';
				break;
			case 'both':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Blind';
				getField("tuftArea").value = 'Seats & Backs';
				break;
	}

//diamond tuft
	switch (styles[style.value].dTuft) {
			case 'seat':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Diamond';
				getField("tuftArea").value = 'Seat(s)';
				break;
			case 'back':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Diamond';
				getField("tuftArea").value = 'Back (/Arms)';
				break;
			case 'both':
				getField("tufting").value = 'Yes';
				getField("tuftStyle").value = 'Diamond';
				getField("tuftArea").value = 'Seats & Backs';
				break;
	}

//no tufting
	if (!styles[style.value].buttonTuft && !styles[style.value].blindTuft && !styles[style.value].dTuft){
			getField("tufting").value = 'Off';
			getField("tuftStyle").value = 'select';
			getField("tuftArea").value = 'select';
	}

//grid seams
	switch (styles[style.value].grid) {
			case 'seat':
				getField("grid").value = 'Yes';
				getField("gridArea").value = 'Seat(s)';
				break;
			case 'back':
				getField("grid").value = 'Yes';
				getField("gridArea").value = 'Back (/Arms)';
				break;
			case 'both':
				getField("grid").value = 'Yes';
				getField("gridArea").value = 'Seats & Backs';
				break;
			case false:
				getField("grid").value = 'Off';
				getField("gridArea").value = 'select';
				break;
	}

//double stitch
	if (styles[style.value].doublestitch === true){
		getField("doublestitch").value = "Yes";
	} else {
		getField("doublestitch").value = "";
	}

//nailheads
	var nailCounts;
	if (styles[style.value].nails){

		if (getField("nailheads").value === ""){
			nailCounts = app.response({cQuestion: "How many counts of nailheads?", cTitle: "Nailhead Counts" });
			getField("nailheads").value = nailCounts;
		} else {
			getField("nailheads").value = getField("nailheads").value;
		}
	}	


//end bracket for if style is normal with upgrades
}

