var skirtCost = getField("cost.skirt");
var slipCost = getField("cost.slip");
var uphOption = getField("upholsteryOption");
var skirtStyle = getField("uphSkirtStyle");
var slipStyle = getField("slipSkirtStyle");



if (uphOption.value != "") {
  skirtCost.display = display.visible;
} else {
  result.display = display.hidden;
}

switch(uphOption.value){

	case 'Upholstered' :
			skirtCost.value = 0;
			slipCost.value = 0;
			skirtCost.display = display.hidden;
			slipCost.display = display.hidden;
			skirtStyle.display = display.hidden;
			slipStyle.display = display.hidden;
			getField("uphCheck_est").value = "Yes";
			getField("skirtCheck_est").value = "";
			getField("slipCheck_est").value = "";
			getField("skirtStyle_est").value = "";
			getField("slipStyle_est").value = "";
			getField("skirtStyle_est").display = display.hidden;
			getField("slipStyle_est").display = display.hidden;
			break;

	case 'Upholstered w/ Skirt' :
			slipCost.value = 0;
			skirtCost.display = display.visible;
			slipCost.display = display.hidden;
			skirtStyle.display = display.visible;
			slipStyle.display = display.hidden;
			getField("uphCheck_est").value = "";
			getField("skirtCheck_est").value = "Yes";
			getField("slipCheck_est").value = "";
			getField("skirtStyle_est").value = skirtStyle.value;
			getField("slipStyle_est").value = "";
			getField("skirtStyle_est").display = display.visible;
			getField("slipStyle_est").display = display.hidden;

			switch (skirtStyle.value) {
				case 'select':
					skirtCost.value = 0;
					break;

				case 'Pocket':
					switch (pricingType.value) {
							case 'resale':
								skirtCost.value = (numPieces * prices[location].skirt_pocket) * designer;
								break;

							case 'regular':
								skirtCost.value = numPieces * prices[location].skirt_pocket;
								break;
					}
					break;

				case 'Fitted':
					switch (pricingType.value) {
							case 'resale':
								skirtCost.value = (numPieces * prices[location].skirt_pocket) * designer;
								break;

							case 'regular':
								skirtCost.value = numPieces * prices[location].skirt_pocket;
								break;
					}
					break;

				case 'Waterfall':
					switch (pricingType.value) {
						case 'resale':
							skirtCost.value = Math.round((getField("cost.basePlusSizing").value * prices[location].skirt_waterfall) * designer);
							break;

						case 'regular':
							skirtCost.value = Math.round(getField("cost.basePlusSizing").value * prices[location].skirt_waterfall);
							break;
					}
					break;

				default:
					skirtCost.value = 0;
			}
			break;

	case 'Slipcovered' :
		skirtCost.value = 0;
		skirtCost.display = display.hidden;
		slipCost.display = display.visible;
		skirtStyle.display = display.hidden;
		slipStyle.display = display.visible;
		getField("uphCheck_est").value = "";
		getField("skirtCheck_est").value = "";
		getField("slipCheck_est").value = "Yes";
		getField("skirtStyle_est").value = "";
		getField("slipStyle_est").value = slipStyle.value;
		getField("skirtStyle_est").display = display.hidden;
		getField("slipStyle_est").display = display.visible;


		switch (slipStyle.value) {
		case 'select':
			slipCost.value = 0;
			break;

		case 'Pocket':
			switch (pricingType.value) {
				case 'resale':
					slipCost.value = Math.round((getField("cost.basePlusSizing").value * prices[location].slip_pocket) * designer);
					break;

				case 'regular':
					slipCost.value = Math.round(getField("cost.basePlusSizing").value * prices[location].slip_pocket);
					break;
			}
			break;

		case 'Fitted':
			switch (pricingType.value) {
				case 'resale':
					slipCost.value = Math.round((getField("cost.basePlusSizing").value * prices[location].slip_pocket) * designer);
					break;

				case 'regular':
					slipCost.value = Math.round(getField("cost.basePlusSizing").value * prices[location].slip_pocket);
					break;
			}
			break;

		case 'Waterfall':
			switch (pricingType.value) {
				case 'resale':
					slipCost.value = Math.round((getField("cost.basePlusSizing").value * prices[location].slip_waterfall) * designer);
					break;

				case 'regular':
					slipCost.value = Math.round(getField("cost.basePlusSizing").value * prices[location].slip_waterfall);
					break;
			}
			break;

		default:
			slipCost.value = 0;
		}
		break;

	default :
		skirtCost.value = 0;
		slipCost.value = 0;
		skirtCost.display = display.hidden;
		slipCost.display = display.hidden;
		skirtStyle.display = display.hidden;
		slipStyle.display = display.hidden;
		getField("uphCheck_est").value = "";
		getField("skirtCheck_est").value = "";
		getField("slipCheck_est").value = "";
		getField("skirtStyle_est").value = "";
		getField("slipStyle_est").value = "";
		getField("skirtStyle_est").display = display.hidden;
		getField("slipStyle_est").display = display.hidden;
} 
