var result = getField("cost.armcaps");
var armcaps = getField("armcaps");
var cost_reg = armcaps.value * prices[location].armcaps;
var cost_des = cost_reg * designer;

if (armcaps.value != ""){
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