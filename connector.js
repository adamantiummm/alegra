var result = getField("cost.connectors");

var numConnectors = getField("connectors");

var result_reg = numConnectors.value * prices[location].connector;
var result_des = result_reg * designer;


if (numConnectors.value != "") {
  result.display = display.visible;
} else {
  result.display = display.hidden;
}


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