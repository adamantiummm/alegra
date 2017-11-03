var result = getField("cost.tufting");
var tufting = getField("tufting");
var tuftStyle = getField("tuftStyle");
var tuftArea = getField("tuftArea");
var baseCost = getField("cost.basePlusSizing");
var numPieces = getField("numPieces");
var tuftStyle_est = getField("tuftStyle_est");
var tuftArea_est = getField("tuftArea_est");
var bTuftCost_reg = numPieces.value * prices[location].bTuft;
var bTuftCost_des = bTuftCost_reg * designer;
var diamondTuftCost_reg = Math.round(baseCost.value * prices[location].dTuft);
var diamondTuftCost_des = Math.round(diamondTuftCost_reg * designer);


if (tufting.value === "Yes") {
	tuftStyle.display = display.visible;
	tuftArea.display = display.visible;
	result.display = display.visible;
	switch (tuftStyle.value) {
		case 'select':
			result.value = 0;
			tuftStyle_est.value  = "";
			break;

		case 'Button':
			tuftStyle_est.value = "Button";
			switch (tuftArea.value) {
				case 'select':
					result.value = 0;
					tuftArea_est.value = "";
					break;
				case 'Seat(s)':
					tuftArea_est.value = "Seat(s)";
					switch (pricingType.value) {
						case 'resale':
							result.value = bTuftCost_des;
							break;

						case 'regular':
							result.value = bTuftCost_reg;
							break;
					}
				break;
				case 'Back (/Arms)':
					tuftArea_est.value = "Back (/Arms)";
					switch (pricingType.value) {
						case 'resale':
							result.value = bTuftCost_des;
							break;

						case 'regular':
							result.value = bTuftCost_reg;
							break;
					}
				break;
				case 'Seats & Backs':
					tuftArea_est.value = "Seats & Backs";
					switch (pricingType.value) {
						case 'resale':
							result.value = bTuftCost_des * 2;
							break;

						case 'regular':
							result.value = bTuftCost_reg * 2;
							break;
					}
				break;
				default:
					result.value = 0;
					tuftArea_est.value = "";
			}
			break;

		case 'Blind':
			tuftStyle_est.value = "Blind";
			switch (tuftArea.value) {
				case 'select':
					result.value = 0;
					tuftArea_est.value = "";
					break;
				case 'Seat(s)':
					tuftArea_est.value = "Seat(s)";
					switch (pricingType.value) {
						case 'resale':
							result.value = bTuftCost_des;
							break;

						case 'regular':
							result.value = bTuftCost_reg;
							break;
					}
					break;
				case 'Back (/Arms)':
					tuftArea_est.value = "Back (/Arms)";
					switch (pricingType.value) {
						case 'resale':
							result.value = bTuftCost_des;
							break;

						case 'regular':
							result.value = bTuftCost_reg;
							break;
					}
				break;
				case 'Seats & Backs':
					tuftArea_est.value = "Seats & Backs";
					switch (pricingType.value) {
						case 'resale':
							result.value = bTuftCost_des * 2;
							break;

						case 'regular':
							result.value = bTuftCost_reg * 2;
							break;
					}
				break;
				default:
					result.value = 0;
					tuftArea_est.value = "";
			}
			break;

		case 'Diamond':
			tuftStyle_est.value = "Diamond";
			switch (tuftArea.value) {
				case 'select':
					result.value = 0;
					tuftArea_est.value = "";
					break;
					
				case 'Seat(s)':
					tuftArea_est.value = "Seat(s)";
					switch (pricingType.value) {
						case 'resale':
							result.value = diamondTuftCost_des;
							break;

						case 'regular':
							result.value = diamondTuftCost_reg;
							break;
					}
				break;

				case 'Back (/Arms)':
					tuftArea_est.value = "Back (/Arms)";
					switch (pricingType.value) {
						case 'resale':
							result.value = diamondTuftCost_des;
							break;

						case 'regular':
							result.value = diamondTuftCost_reg;
							break;
					}
				break;

				case 'Seats & Backs':
					tuftArea_est.value = "Seats & Backs";
					switch (pricingType.value) {
						case 'resale':
							result.value = diamondTuftCost_des * 2;
							break;

						case 'regular':
							result.value = diamondTuftCost_reg * 2;
							break;
					}
				break;

				default:
					result.value = 0;
					tuftArea_est.value = "";
			}
			break;

		default:
			result.value = 0;
			tuftStyle_est.value  = "";
	}
} else {
  tuftStyle.display = display.hidden;
  tuftArea.display = display.hidden;
  result.display = display.hidden;
  result.value = 0
  tuftStyle_est.value = "";
  tuftArea_est.value = "";
}