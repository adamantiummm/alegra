var result = getField("cost.exLength");
var mainUpholstery = getField("mainUpholstery");
var extraLength = getField("exLength");
var result_reg;

if (extraLength.value != "") {
  result.display = display.visible;
} else {
  result.display = display.hidden;
}

switch (mainUpholstery.value) {
		case 'Fabric':
			if (extraLength.value === 0 || extraLength.value === ""){
				result_reg = 0;
				}

			if (extraLength.value >= 1 && extraLength.value <= 10){
				result_reg = prices[location].exLength_fab;
			}

			if (extraLength.value >= 11 && extraLength.value <= 20){
				result_reg = prices[location].exLength_fab * 2;
			}

			if (extraLength.value >= 21 && extraLength.value <= 30){
				result_reg = prices[location].exLength_fab * 3;
			}

			if (extraLength.value >= 31 && extraLength.value <= 40){
				result_reg = prices[location].exLength_fab * 4;
			}

			if (extraLength.value >= 41 && extraLength.value <= 50){
				result_reg = prices[location].exLength_fab * 5;
			}

			if (extraLength.value >= 51 && extraLength.value <= 60){
				result_reg = prices[location].exLength_fab * 6;
			}

			if (extraLength.value >= 61 && extraLength.value <= 70){
				result_reg = prices[location].exLength_fab * 7;
			}

			if (extraLength.value >= 71 && extraLength.value <= 80){
				result_reg = prices[location].exLength_fab * 8;
			}

			if (extraLength.value >= 81 && extraLength.value <= 90){
				result_reg = prices[location].exLength_fab * 9;
			}

			if (extraLength.value >= 91 && extraLength.value <= 100){
				result_reg = prices[location].exLength_fab * 10;
			}

			if (extraLength.value >= 101 && extraLength.value <= 110){
				result_reg = prices[location].exLength_fab * 11;
			}

			if (extraLength.value >= 111 && extraLength.value <= 120){
				result_reg = prices[location].exLength_fab * 12;
			}

			if (extraLength.value >= 121 && extraLength.value <= 130){
				result_reg = prices[location].exLength_fab * 13;
			}

			if (extraLength.value >= 131 && extraLength.value <= 140){
				result_reg = prices[location].exLength_fab * 14;
			}

			if (extraLength.value >= 141 && extraLength.value <= 150){
				result_reg = prices[location].exLength_fab * 15;
			}

			if (extraLength.value >= 151 && extraLength.value <= 160){
				result_reg = prices[location].exLength_fab * 16;
			}

			if (extraLength.value >= 161 && extraLength.value <= 170){
				result_reg = prices[location].exLength_fab * 17;
			}

			if (extraLength.value >= 171 && extraLength.value <= 180){
				result_reg = prices[location].exLength_fab * 18;
			}

			if (extraLength.value >= 181 && extraLength.value <= 190){
				result_reg = prices[location].exLength_fab * 19;
			}

			if (extraLength.value >= 191 && extraLength.value <= 200){
				result_reg = prices[location].exLength_fab * 20;
			}

			if (extraLength.value > 200){
				result_reg = "error";
			}
			break;

		case 'Leather':
			if (extraLength.value === 0 || extraLength.value === ""){
				result_reg = 0;
				}

			if (extraLength.value >= 1 && extraLength.value <= 10){
				result_reg = prices[location].exLength_leather;
			}

			if (extraLength.value >= 11 && extraLength.value <= 20){
				result_reg = prices[location].exLength_leather * 2;
			}

			if (extraLength.value >= 21 && extraLength.value <= 30){
				result_reg = prices[location].exLength_leather * 3;
			}

			if (extraLength.value >= 31 && extraLength.value <= 40){
				result_reg = prices[location].exLength_leather * 4;
			}

			if (extraLength.value >= 41 && extraLength.value <= 50){
				result_reg = prices[location].exLength_leather * 5;
			}

			if (extraLength.value >= 51 && extraLength.value <= 60){
				result_reg = prices[location].exLength_leather * 6;
			}

			if (extraLength.value >= 61 && extraLength.value <= 70){
				result_reg = prices[location].exLength_leather * 7;
			}

			if (extraLength.value >= 71 && extraLength.value <= 80){
				result_reg = prices[location].exLength_leather * 8;
			}

			if (extraLength.value >= 81 && extraLength.value <= 90){
				result_reg = prices[location].exLength_leather * 9;
			}

			if (extraLength.value >= 91 && extraLength.value <= 100){
				result_reg = prices[location].exLength_leather * 10;
			}

			if (extraLength.value >= 101 && extraLength.value <= 110){
				result_reg = prices[location].exLength_leather * 11;
			}

			if (extraLength.value >= 111 && extraLength.value <= 120){
				result_reg = prices[location].exLength_leather * 12;
			}

			if (extraLength.value >= 121 && extraLength.value <= 130){
				result_reg = prices[location].exLength_leather * 13;
			}

			if (extraLength.value >= 131 && extraLength.value <= 140){
				result_reg = prices[location].exLength_leather * 14;
			}

			if (extraLength.value >= 141 && extraLength.value <= 150){
				result_reg = prices[location].exLength_leather * 15;
			}

			if (extraLength.value >= 151 && extraLength.value <= 160){
				result_reg = prices[location].exLength_leather * 16;
			}

			if (extraLength.value >= 161 && extraLength.value <= 170){
				result_reg = prices[location].exLength_leather * 17;
			}

			if (extraLength.value >= 171 && extraLength.value <= 180){
				result_reg = prices[location].exLength_leather * 18;
			}

			if (extraLength.value >= 181 && extraLength.value <= 190){
				result_reg = prices[location].exLength_leather * 19;
			}

			if (extraLength.value >= 191 && extraLength.value <= 200){
				result_reg = prices[location].exLength_fab * 20;
			}

			if (extraLength.value > 200){
				result_reg = "error";
			}
			break;

		case 'C.O.M.':
			if (extraLength.value === 0 || extraLength.value === ""){
				result_reg = 0;
				}

			if (extraLength.value >= 1 && extraLength.value <= 10){
				result_reg = prices[location].exLength_fab;
			}

			if (extraLength.value >= 11 && extraLength.value <= 20){
				result_reg = prices[location].exLength_fab * 2;
			}

			if (extraLength.value >= 21 && extraLength.value <= 30){
				result_reg = prices[location].exLength_fab * 3;
			}

			if (extraLength.value >= 31 && extraLength.value <= 40){
				result_reg = prices[location].exLength_fab * 4;
			}

			if (extraLength.value >= 41 && extraLength.value <= 50){
				result_reg = prices[location].exLength_fab * 5;
			}

			if (extraLength.value >= 51 && extraLength.value <= 60){
				result_reg = prices[location].exLength_fab * 6;
			}

			if (extraLength.value >= 61 && extraLength.value <= 70){
				result_reg = prices[location].exLength_fab * 7;
			}

			if (extraLength.value >= 71 && extraLength.value <= 80){
				result_reg = prices[location].exLength_fab * 8;
			}

			if (extraLength.value >= 81 && extraLength.value <= 90){
				result_reg = prices[location].exLength_fab * 9;
			}

			if (extraLength.value >= 91 && extraLength.value <= 100){
				result_reg = prices[location].exLength_fab * 10;
			}

			if (extraLength.value >= 101 && extraLength.value <= 110){
				result_reg = prices[location].exLength_fab * 11;
			}

			if (extraLength.value >= 111 && extraLength.value <= 120){
				result_reg = prices[location].exLength_fab * 12;
			}

			if (extraLength.value >= 121 && extraLength.value <= 130){
				result_reg = prices[location].exLength_fab * 13;
			}

			if (extraLength.value >= 131 && extraLength.value <= 140){
				result_reg = prices[location].exLength_fab * 14;
			}

			if (extraLength.value >= 141 && extraLength.value <= 150){
				result_reg = prices[location].exLength_fab * 15;
			}

			if (extraLength.value >= 151 && extraLength.value <= 160){
				result_reg = prices[location].exLength_fab * 16;
			}

			if (extraLength.value >= 161 && extraLength.value <= 170){
				result_reg = prices[location].exLength_fab * 17;
			}

			if (extraLength.value >= 171 && extraLength.value <= 180){
				result_reg = prices[location].exLength_fab * 18;
			}

			if (extraLength.value >= 181 && extraLength.value <= 190){
				result_reg = prices[location].exLength_fab * 19;
			}

			if (extraLength.value >= 191 && extraLength.value <= 200){
				result_reg = prices[location].exLength_fab * 20;
			}

			if (extraLength.value > 200){
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