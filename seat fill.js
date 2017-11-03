var seatFill = getField("seatFill");

var foamCost = getField("cost.seat_premFoam");
var trilliumCost = getField("cost.seat_trillium");
var ten90Cost = getField("cost.seat_1090");

var numSofas = getField("#sofas");
var numLoves = getField("#loves");
var numChaises = getField("#chaisesORwedges");
var numChairs = getField("#chairs");

var chairFoam = prices[location].premFoam_chair * numChairs.value;
var loveFoam = prices[location].premFoam_love * numLoves.value;
var chaiseFoam = prices[location].premFoam_love * numChaises.value;
var sofaFoam = prices[location].premFoam_sofa * numSofas.value;
var exFoam = prices[location].premFoam_exInch * getField("exLength").value;

var chairDown = prices[location].trillium_chair * numChairs.value;
var loveDown = prices[location].trillium_love * numLoves.value;
var chaiseDown = prices[location].trillium_love * numChaises.value;
var sofaDown = prices[location].trillium_sofa * numSofas.value;
var exDown = prices[location].trillium_exInch * getField("exLength").value;

var stdFoam_est = getField("seats_stdFoam_est");
var premFoam_est = getField("seats_premFoam_est");
var trillium_est = getField("seats_trillium_est");
var ten90_est = getField("seats_1090_est");
var firmness = getField("premFoamFirmness");
var firmness_est = getField("firmness");



var trilliumCost_reg = chairDown + chaiseDown + loveDown + sofaDown + exDown;
var trilliumCost_des = trilliumCost_reg * designer;
var ten90Cost_reg = chairDown + chaiseDown + loveDown + sofaDown + exDown;
var ten90Cost_des = ten90Cost_reg * designer;
var foamCost_reg = chairFoam + chaiseFoam + loveFoam + sofaFoam + exFoam;
var foamCost_des = foamCost_reg * designer;






if (seatFill.value != "") {
	switch (seatFill.value) {
			case 'stdFoam':
				foamCost.value = 0;
				trilliumCost.value = 0;
				ten90Cost.value = 0;
				foamCost.display = display.hidden;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.hidden;
				stdFoam_est.value = "Yes";
				premFoam_est.value = "";
				trillium_est.value = "";
				ten90_est.value = "";
				firmness_est.value = "";
			break;

			case 'premFoam':
				trilliumCost.value = 0;
				ten90Cost.value = 0;
				foamCost.display = display.visible;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.hidden;
				stdFoam_est.value = "";
				premFoam_est.value = "Yes";
				trillium_est.value = "";
				ten90_est.value = "";
				switch (pricingType.value) {
					case 'resale':
						foamCost.value = foamCost_des;
				break;

					case 'regular':
						foamCost.value = foamCost_reg;
				break;
				}
				switch (firmness.value) {
					case 'select':
						firmness_est.value = "";
						break;
					case 'Soft':
						firmness_est.value = "Soft";
						break;
					case 'Medium':
						firmness_est.value = "Medium";
						break;
					case 'Firm':
						firmness_est.value = "Firm";
						break;
					default:
						firmness_est.value = "";
				}
			break;

			case 'trillium':
				foamCost.value = 0;
				ten90Cost.value = 0;
				foamCost.display = display.hidden;
				trilliumCost.display = display.visible;
				ten90Cost.display = display.hidden;
				stdFoam_est.value = "";
				premFoam_est.value = "";
				trillium_est.value = "Yes";
				ten90_est.value = "";
				firmness_est.value = "";
				switch (pricingType.value) {
					case 'resale':
						trilliumCost.value = trilliumCost_des;
				break;

					case 'regular':
						trilliumCost.value = trilliumCost_reg;
				break;
				}
			break;


			case 'ten90':
				foamCost.value = 0;
				trilliumCost.value = 0;
				foamCost.display = display.hidden;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.visible;
				stdFoam_est.value = "";
				premFoam_est.value = "";
				trillium_est.value = "";
				ten90_est.value = "Yes";
				firmness_est.value = "";
				switch (pricingType.value) {
					case 'resale':
						ten90Cost.value = ten90Cost_des;
				break;

					case 'regular':
						ten90Cost.value = ten90Cost_reg;
				break;
				}
			break;


			default:
				foamCost.value = 0;
				trilliumCost.value = 0;
				ten90Cost.value = 0;
				foamCost.display = display.hidden;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.hidden;
				stdFoam_est.value = "";
				premFoam_est.value = "";
				trillium_est.value = "";
				ten90_est.value = "";
				firmness_est.value = "";
	}  

} else {
	foamCost.value = 0;
	trilliumCost.value = 0;
	ten90Cost.value = 0;
	foamCost.display = display.hidden;
	trilliumCost.display = display.hidden;
	ten90Cost.display = display.hidden;
	stdFoam_est.value = "";
	premFoam_est.value = "";
	trillium_est.value = "";
	ten90_est.value = "";
	firmness_est.value = "";
}


