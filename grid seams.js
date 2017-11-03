var result = getField("cost.grid");
var gridCost_reg = numPieces.value * prices[location].grid;
var gridCost_des = gridCost_reg * designer;
var grid = getField("grid");
var gridArea = getField("gridArea");
var gridArea_est = getField("gridArea_est");
var numPieces = getField("numPieces");


if (grid.value === "Yes") {
  gridArea.display = display.visible;
  result.display = display.visible;
  switch (gridArea.value) {
		case 'select':
			result.value = 0;
			gridArea_est.value = "";
			break;
		case 'Seat(s)':
			gridArea_est.value = "Seat(s)";
			switch (pricingType.value) {
				case 'resale':
					result.value = gridCost_des;
					break;

				case 'regular':
					result.value = gridCost_reg;
					break;
			}
		break;
		case 'Back (/Arms)':
			gridArea_est.value = "Back (/Arms)";
			switch (pricingType.value) {
				case 'resale':
					result.value = gridCost_des;
					break;

				case 'regular':
					result.value = gridCost_reg;
					break;
			}
		break;
		case 'Seats & Backs':
			gridArea_est.value = "Seats & Backs";
			switch (pricingType.value) {
				case 'resale':
					result.value = gridCost_des * 2;
					break;

				case 'regular':
					result.value = gridCost_reg * 2;
					break;
			}
		break;
		default:
			result.value = 0
			gridArea_est.value = "";
}


} else {
  result.value = 0;
  gridArea.display = display.hidden;
  result.display = display.hidden;
  gridArea_est.value = "";
}