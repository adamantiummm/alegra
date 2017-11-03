var result = getField("cost.exDepth");
var mainUpholstery = getField("mainUpholstery");
var extraDepth = getField("exDepth");
var pieces = getField("#sofas").value + getField("#loves").value + getField("#chairs").value;
var result_reg;

if (extraDepth.value != "") {
  result.display = display.visible;
} else {
  result.display = display.hidden;
}

switch (mainUpholstery.value) {
		case 'Fabric':
			if (extraDepth.value === 0 || extraDepth.value === ""){
				result_reg = 0;
				}

			if (extraDepth.value >= 1 && extraDepth.value <= 6){
				result_reg = prices[location].exDepth_fab * pieces;
			}

			if (extraDepth.value >= 7 && extraDepth.value <= 12){
				result_reg = (prices[location].exDepth_fab * 2) * pieces;
			}

			if (extraDepth.value >= 13 && extraDepth.value <= 18){
				result_reg = (prices[location].exDepth_fab * 3) * pieces;
			}

			if (extraDepth.value >= 24 && extraDepth.value <= 30){
				result_reg = (prices[location].exDepth_fab * 4) * pieces;
			}

			if (extraDepth.value >= 36 && extraDepth.value <= 42){
				result_reg = (prices[location].exDepth_fab * 5) * pieces;
			}

			if (extraDepth.value > 42){
				result_reg = "error";
			}
			break;
		case 'Leather':
			if (extraDepth.value === 0 || extraDepth.value === ""){
				result_reg = 0;
				}

			if (extraDepth.value >= 1 && extraDepth.value <= 6){
				result_reg = (prices[location].exDepth_leather) * pieces;
			}

			if (extraDepth.value >= 7 && extraDepth.value <= 12){
				result_reg = (prices[location].exDepth_leather * 2) * pieces;
			}

			if (extraDepth.value >= 13 && extraDepth.value <= 18){
				result_reg = (prices[location].exDepth_leather * 3) * pieces;
			}

			if (extraDepth.value >= 24 && extraDepth.value <= 30){
				result_reg = (prices[location].exDepth_leather * 4) * pieces;
			}

			if (extraDepth.value >= 36 && extraDepth.value <= 42){
				result_reg = (prices[location].exDepth_leather * 5) * pieces;
			}

			if (extraDepth.value > 42){
				result_reg = "error";
			}
			break;
		case 'C.O.M.':
			if (extraDepth.value === 0 || extraDepth.value === ""){
				result_reg = 0;
				}

			if (extraDepth.value >= 1 && extraDepth.value <= 6){
				result_reg = prices[location].exDepth_fab * pieces;
			}

			if (extraDepth.value >= 7 && extraDepth.value <= 12){
				result_reg = (prices[location].exDepth_fab * 2) * pieces;
			}

			if (extraDepth.value >= 13 && extraDepth.value <= 18){
				result_reg = (prices[location].exDepth_fab * 3) * pieces;
			}

			if (extraDepth.value >= 24 && extraDepth.value <= 30){
				result_reg = (prices[location].exDepth_fab * 4) * pieces;
			}

			if (extraDepth.value >= 36 && extraDepth.value <= 42){
				result_reg = (prices[location].exDepth_fab * 5) * pieces;
			}

			if (extraDepth.value > 42){
				result_reg = "error";
			}
			break;
		default:
			result_reg = 0;
}



var result_des = result_reg * designer;

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