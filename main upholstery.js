var mainUpholstery = getField("mainUpholstery");
var fabText = getField("text_fabricGrade");
var fabGrade = getField("fabric.grade");
var totalFabInc = getField("cost.totalFabricUpcharge");
var leatherText = getField("text_leatherGrade");
var leatherGrade = getField("leather.grade");

var eachGrade_est = getField("plusFabGrade_est");
var fabGrade_est = getField("fabricGrade_est");

var numSofas = getField("#sofas");
var numLoves = getField("#loves");
var numChaises = getField("#chaisesORwedges");
var numChairs = getField("#chairs");

var fabGradeCost_reg =
(numSofas.value * prices[location].sofa_perGrade) +
(numLoves.value * prices[location].love_perGrade) +
(numChaises.value * prices[location].love_perGrade) +
(numChairs.value * prices[location].chair_perGrade);

var fabGradeCost_des = Math.round(fabGradeCost_reg * designer);

switch (mainUpholstery.value) {
		case 'Fabric':
			fabText.display = display.visible;
			fabGrade.display = display.visible;
			totalFabInc.display = display.visible;
			leatherText.display = display.hidden;
			leatherGrade.display = display.hidden;
			getField("text_totalFabInc").display = display.visible;
			getField("fabricCheck_est").value = "Yes";
			getField("leatherCheck_est").value = "";
			getField("comCheck_est").value = "";
			fabGrade_est.value = fabGrade.value;
			switch (pricingType.value) {
				case 'resale':
					eachGrade_est.value = "+/- $" + fabGradeCost_des + " Per Fabric Grade";
				break;

				case 'regular':
					eachGrade_est.value = "+/- $" + fabGradeCost_reg + " Per Fabric Grade";
			break;
			}
		break;

		case 'Leather':
			fabText.display = display.hidden;
			fabGrade.display = display.hidden;
			totalFabInc.display = display.hidden;
			leatherText.display = display.visible;
			leatherGrade.display = display.visible;
			getField("text_totalFabInc").display = display.hidden;
			getField("cost.totalFabricUpcharge").value = 0;
			getField("fabricCheck_est").value = "";
			getField("leatherCheck_est").value = "Yes";
			getField("comCheck_est").value = "";
			eachGrade_est.value = "";
			fabGrade_est.value = leatherGrade.value;
		break;

		case 'C.O.M.':
			fabText.display = display.hidden;
			fabGrade.display = display.hidden;
			totalFabInc.display = display.hidden;
			leatherText.display = display.hidden;
			leatherGrade.display = display.hidden;
			getField("text_totalFabInc").display = display.hidden;
			getField("cost.totalFabricUpcharge").value = 0;
			getField("fabricCheck_est").value = "";
			getField("leatherCheck_est").value = "";
			getField("comCheck_est").value = "Yes";
			eachGrade_est.value = "";
			fabGrade_est.value = "";
		break;

		default:
			fabText.display = display.hidden;
			fabGrade.display = display.hidden;
			totalFabInc.display = display.hidden;
			leatherText.display = display.hidden;
			leatherGrade.display = display.hidden;
			getField("text_totalFabInc").display = display.hidden;
			getField("cost.totalFabricUpcharge").value = 0;
			getField("fabricCheck_est").value = "";
			getField("leatherCheck_est").value = "";
			getField("comCheck_est").value = "";
			eachGrade_est.value = "";
			fabGrade_est.value = "";
		break;
}