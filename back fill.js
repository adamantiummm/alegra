var backFill = getField("backFill");

var lifePolyCost = getField("cost.back_lifetimePoly");
var trilliumCost = getField("cost.back_trillium");
var ten90Cost = getField("cost.back_1090");
var foamCost = getField("cost.back_foam");

var numSofas = getField("#sofas");
var numLoves = getField("#loves");
var numChaises = getField("#chaisesORwedges");
var numChairs = getField("#chairs");

var chairPoly = prices[location].lifetimePoly_chair * numChairs.value;
var lovePoly = prices[location].lifetimePoly_love * numLoves.value;
var chaisePoly = prices[location].lifetimePoly_love * numChaises.value;
var sofaPoly = prices[location].lifetimePoly_sofa * numSofas.value;
var exPoly = prices[location].lifetimePoly_exInch * getField("exLength").value;

var chairDown = prices[location].trillium_chair * numChairs.value;
var loveDown = prices[location].trillium_love * numLoves.value;
var chaiseDown = prices[location].trillium_love * numChaises.value;
var sofaDown = prices[location].trillium_sofa * numSofas.value;
var exDown = prices[location].trillium_exInch * getField("exLength").value;

var chairFoam = prices[location].foamBacks_chair * numChairs.value;
var loveFoam = prices[location].foamBacks_love * numLoves.value;
var chaiseFoam = prices[location].foamBacks_love * numChaises.value;
var sofaFoam = prices[location].foamBacks_sofa * numSofas.value;
var exFoam = prices[location].foamBacks_exInch * getField("exLength").value;

var stdPoly_est = getField("backs_stdPoly_est");
var lifetimePoly_est = getField("backs_lifetimePoly_est");
var trillium_est = getField("backs_trillium_est");
var ten90_est = getField("backs_ten90_est");
var foamBacks_est = getField("backs_foam_est");
var tight_est = getField("backs_tight_est");

var lifePolyCost_reg = chairPoly + chaisePoly + lovePoly + sofaPoly + exPoly;
var lifePolyCost_des = lifePolyCost_reg * designer;
var trilliumCost_reg = chairDown + chaiseDown + loveDown + sofaDown + exDown;
var trilliumCost_des = trilliumCost_reg * designer;
var ten90Cost_reg = chairDown + chaiseDown + loveDown + sofaDown + exDown;
var ten90Cost_des = ten90Cost_reg * designer;
var foamCost_reg = chairFoam + chaiseFoam + loveFoam + sofaFoam + exFoam;
var foamCost_des = foamCost_reg * designer;

if (backFill.value != "") {
	switch (backFill.value) {
			case 'stdPoly':
				lifePolyCost.value = 0;
				trilliumCost.value = 0;
				ten90Cost.value = 0;
				lifePolyCost.display = display.hidden;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.hidden;
				stdPoly_est.value = "Yes";
				lifetimePoly_est.value = "";
				trillium_est.value = "";
				ten90_est.value = "";
				tight_est.value = "";
			break;

			case 'lifetimePoly':
				trilliumCost.value = 0;
				ten90Cost.value = 0;
				lifePolyCost.display = display.visible;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.hidden;
				stdPoly_est.value = "";
				lifetimePoly_est.value = "Yes";
				trillium_est.value = "";
				ten90_est.value = "";
				tight_est.value = "";
				switch (pricingType.value) {
					case 'resale':
						lifePolyCost.value = lifePolyCost_des;
					break;

					case 'regular':
						lifePolyCost.value = lifePolyCost_reg;
					break;
				}
			break;


			case 'trillium':
				lifePolyCost.value = 0;
				ten90Cost.value = 0;
				lifePolyCost.display = display.hidden;
				trilliumCost.display = display.visible;
				ten90Cost.display = display.hidden;
				stdPoly_est.value = "";
				lifetimePoly_est.value = "";
				trillium_est.value = "Yes";
				ten90_est.value = "";
				tight_est.value = "";
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
				lifePolyCost.value = 0;
				trilliumCost.value = 0;
				lifePolyCost.display = display.hidden;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.visible;
				stdPoly_est.value = "";
				lifetimePoly_est.value = "";
				trillium_est.value = "";
				ten90_est.value = "Yes";
				tight_est.value = "";
				switch (pricingType.value) {
					case 'resale':
						ten90Cost.value = ten90Cost_des;
					break;

					case 'regular':
						ten90Cost.value = ten90Cost_reg;
					break;
				}
			break;


			case 'tight':
				lifePolyCost.value = 0;
				trilliumCost.value = 0;
				ten90Cost.value = 0;
				lifePolyCost.display = display.hidden;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.hidden;
				stdPoly_est.value = "";
				lifetimePoly_est.value = "";
				trillium_est.value = "";
				ten90_est.value = "";
				getField("foamBacks").value = "";
				foamCost.value = 0;
				foamCost.display = display.hidden;
				tight_est.value = "Yes";
			break;


			default:
				lifePolyCost.value = 0;
				trilliumCost.value = 0;
				ten90Cost.value = 0;
				lifePolyCost.display = display.hidden;
				trilliumCost.display = display.hidden;
				ten90Cost.display = display.hidden;
				stdPoly_est.value = "";
				lifetimePoly_est.value = "";
				trillium_est.value = "";
				ten90_est.value = "";
				tight_est.value = "";
	}  

} else {
	lifePolyCost.value = 0;
	trilliumCost.value = 0;
	ten90Cost.value = 0;
	lifePolyCost.display = display.hidden;
	trilliumCost.display = display.hidden;
	ten90Cost.display = display.hidden;
	stdPoly_est.value = "";
	lifetimePoly_est.value = "";
	trillium_est.value = "";
	ten90_est.value = "";
	tight_est.value = "";
}

//foam backs
if (getField("foamBacks").value === "Yes"){
	foamCost.display = display.visible;
	foamBacks_est.value = "Yes";
	tight_est.value = "";
	if (backFill.value === "tight"){
		backFill.value = "";
	} 
	switch (pricingType.value) {
		case 'resale':
			foamCost.value = foamCost_des;
	break;

		case 'regular':
			foamCost.value = foamCost_reg;
	break;
	}

} else {
	foamCost.value = 0;
	foamCost.display = display.hidden;
	foamBacks_est.value = "";
}

