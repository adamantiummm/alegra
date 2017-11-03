var result = getField("cost.styleChanges");
var styleChanges = getField("styleChanges");

var result_reg = styleChanges.value * prices[location].styleChange;
var result_des = result_reg * designer;


if (styleChanges.value != ""){
	result.display = display.visible;
	switch (pricingType.value) {
		case 'resale':
			result.value = result_des;
			break;

		case 'regular':
			result.value = result_reg;
			break;
	}

} else {
	result.value = 0;
	result.display = display.hidden;
}
