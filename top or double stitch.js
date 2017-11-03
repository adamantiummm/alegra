//topstitch field
var result = getField("cost.topstitch");
var topstitch = getField("topstitch");
var numPieces = getField("numPieces");
var cost_reg = numPieces.value * prices[location].topstitch;
var cost_des = cost_reg * designer;

if (topstitch.value === "Yes"){
	result.display = display.visible;
	switch (pricingType.value) {
		case 'resale':
			result.value = cost_des;
			break;

		case 'regular':
			result.value = cost_reg;
			break;
	}
} else {
	result.value = 0;
	result.display = display.hidden;
}



//doublestitch field
var result = getField("cost.doublestitch");
var doublestitch = getField("doublestitch");
var numPieces = getField("numPieces");
var cost_reg = numPieces.value * prices[location].doublestitch;
var cost_des = cost_reg * designer;

if (doublestitch.value === "Yes"){
	result.display = display.visible;
		switch (pricingType.value) {
		case 'resale':
			result.value = cost_des;
			break;

		case 'regular':
			result.value = cost_reg;
			break;
	}
} else {
	result.value = 0;
	result.display = display.hidden;
}