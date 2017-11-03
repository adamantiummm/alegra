var result = getField("cost.newStyle");
var newStyle = getField("newStyle");

var result_reg = prices[location].newStyle * getField("numPieces").value;

var result_des = result_reg * designer;

switch(newStyle.value){
	case 'Yes' :
		result.display = display.visible;
		switch (pricingType.value) {
			case 'regular':
				result.value = result_reg;
				break;

			case 'resale':
				result.value = result_des;
				break;
			default:
				result.value = result_reg;
		}

		
	break;
	default :
		result.value = 0;
		result.display = display.hidden;
}