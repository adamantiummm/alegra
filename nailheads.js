var result = getField("cost.nailheads");
var nailheads = getField("nailheads");
var nailOption = getField("nailheadOption");
var nailSpacing = getField("nailheadSpacing");
var nailOption_est = getField("nailOption_est");
var nailSpacing_est = getField("nailSpacing_est");
var cost_reg = nailheads.value * prices[location].nailheads;
var cost_des = cost_reg * designer;

//nailhead placement coded in notes_est field

if (nailheads.value != ""){
	result.display = display.visible;
	nailOption_est.value = nailOption.value;
	nailSpacing_est.value = nailSpacing.value;
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
	nailOption_est.value == "";
	nailSpacing_est.value == "";
}