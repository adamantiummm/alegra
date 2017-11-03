var result = getField("cost.totalFabricUpcharge");
var mainUpholstery = getField("mainUpholstery");
var fabGrade = getField("fabric.grade");

var numChairs = getField("#chairs");
var numLoves = getField("#loves");
var numChaises = getField("#chaisesORwedges");
var numSofas = getField("#sofas");

var chairInc = prices[location].chair_perGrade * numChairs.value;
var loveInc = prices[location].love_perGrade * numLoves.value;
var chaiseInc = prices[location].love_perGrade * numChaises.value;
var sofaInc = prices[location].sofa_perGrade * numSofas.value;

var gradeSubOne = fabGrade.value - 1;
var totalFabInc = chairInc + chaiseInc + loveInc + sofaInc;

var result_reg;


switch(mainUpholstery.value){
	case 'Fabric' :
		if (fabGrade.value === "select" || fabGrade.value === 1) {
		  	result_reg = 0;
		} else {
			  result_reg = totalFabInc * gradeSubOne;
			}
		break;
	default :
		result_reg = 0;
};


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