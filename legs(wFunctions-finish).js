var legs = getField("legs");
var numPieces = getField("numPieces");
var wBaseType = getField("wBaseClass");
var metalLegsType = getField("metalLegsClass");
var wBaseCost = getField("cost.wBase");
var wBaseCost_regCl1 = prices[location].wBase_cl1 * numPieces.value;
var wBaseCost_regCl2 = prices[location].wBase_cl2 * numPieces.value;
var wBaseCost_desCl1 = Math.round(wBaseCost_regCl1 * designer);
var wBaseCost_desCl2 = Math.round(wBaseCost_regCl2 * designer);
var metalLegsCost = getField("cost.metalLegs");
var metalLegsCost_regCl1 = prices[location].metalLegs_cl1 * numPieces.value;
var metalLegsCost_regCl2 = prices[location].metalLegs_cl2 * numPieces.value;
var metalLegsCost_desCl1 = Math.round(metalLegsCost_regCl1 * designer);
var metalLegsCost_desCl2 = Math.round(metalLegsCost_regCl2 * designer);
var swivelCost = getField("cost.swivel");
var swivelCost_reg = prices[location].swivel;
var swivelCost_des = Math.round(swivelCost_reg * designer);

var woodFinish = getField("legFinish_wood");
var metalFinish = getField("legFinish_metal");

var hide = function(hideField){
	hideField.display = display.hidden;
};

var show = function(showField){
	showField.display = display.visible;
};

var setBlank = function(blankField){
	blankField.value = 0;
};


switch(legs.value){
		case 'std' :
			setBlank(wBaseCost);
			setBlank(metalLegsCost);
			setBlank(swivelCost);
			hide(wBaseType);
			hide(metalLegsType);
			hide(wBaseCost);
			hide(metalLegsCost);
			hide(swivelCost);
			show(woodFinish);
			hide(metalFinish);
			hide(getField("swivel_est"));
			getField("stdLegs_est").value = "Yes";
			setBlank(getField("wBase_cl1_est"));
			setBlank(getField("wBase_cl2_est"));
			setBlank(getField("metal_cl1_est"));
			setBlank(getField("metal_cl2_est"));
			getField("legFinish_est").value = woodFinish.value;
			break;

		case 'wBase' :
			setBlank(metalLegsCost);
			setBlank(swivelCost);
			show(wBaseType);
			hide(metalLegsType);
			show(wBaseCost);
			hide(metalLegsCost);
			hide(swivelCost);
			show(woodFinish);
			hide(metalFinish);
			hide(getField("swivel_est"));
			setBlank(getField("stdLegs_est"));
			setBlank(getField("metal_cl1_est"));
			setBlank(getField("metal_cl2_est"));
			getField("legFinish_est").value = woodFinish.value;
			switch(wBaseType.value){
				case 'Wood Base (Class 1)' :
					getField("wBase_cl1_est").value = "Yes";
					setBlank(getField("wBase_cl2_est"));
					switch (pricingType.value) {
					case 'resale':
						wBaseCost.value = wBaseCost_desCl1;
						break;

					case 'regular':
						wBaseCost.value = wBaseCost_regCl1;
						break;
				}
				break;
				case 'Wood Base (Class 2)' :
					setBlank(getField("wBase_cl1_est"));
					getField("wBase_cl2_est").value = "Yes";
					metalLegsCost.value = 0;
					swivelCost.value = 0;
					switch (pricingType.value) {
					case 'resale':
						wBaseCost.value = wBaseCost_desCl2;
						break;

					case 'regular':
						wBaseCost.value = wBaseCost_regCl2;
						break;
					}
				break;
				default :
					wBaseCost.value = 0;
					setBlank(getField("wBase_cl1_est"));
					setBlank(getField("wBase_cl2_est"));
			}
			break;

		case 'metal' :
			wBaseCost.value = 0;
			swivelCost.value = 0;
			wBaseType.display = display.hidden;
			metalLegsType.display = display.visible;
			wBaseCost.display = display.hidden;
			metalLegsCost.display = display.visible;
			swivelCost.display = display.hidden;
			woodFinish.display = display.hidden;
			metalFinish.display = display.visible;
			getField("swivel_est").display = display.hidden;
			getField("stdLegs_est").value = "";
			getField("wBase_cl1_est").value = "";
			getField("wBase_cl2_est").value = "";
			getField("legFinish_est").value = metalFinish.value;
			switch(metalLegsType.value){
				case 'Metal Legs (Class 1)' :
					wBaseCost.value = 0;
					swivelCost.value = 0;
					getField("metal_cl1_est").value = "Yes";
					getField("metal_cl2_est").value = "";
					switch (pricingType.value) {
					case 'resale':
						metalLegsCost.value = metalLegsCost_desCl1;
						break;

					case 'regular':
						metalLegsCost.value = metalLegsCost_regCl1;
						break;
					}
				break;
				case 'Metal Legs (Class 2)' :
					wBaseCost.value = 0;
					swivelCost.value = 0;
					getField("metal_cl1_est").value = "";
					getField("metal_cl2_est").value = "Yes";
					switch (pricingType.value) {
					case 'resale':
						metalLegsCost.value = metalLegsCost_desCl2;
						break;

					case 'regular':
						metalLegsCost.value = metalLegsCost_regCl2;
						break;
					}
				break;
				default :
					metalLegsCost.value = 0;
					getField("metal_cl1_est").value = "";
					getField("metal_cl2_est").value = "";
			}			
			break;

		case 'swivel' :
			wBaseCost.value = 0;
			metalLegsCost.value = 0;
			wBaseType.display = display.hidden;
			metalLegsType.display = display.hidden;
			wBaseCost.display = display.hidden;
			metalLegsCost.display = display.hidden;
			swivelCost.display = display.visible;
			woodFinish.display = display.hidden;
			metalFinish.display = display.hidden;
			getField("stdLegs_est").value = "";
			getField("wBase_cl1_est").value = "";
			getField("wBase_cl2_est").value = "";
			getField("metal_cl1_est").value = "";
			getField("metal_cl2_est").value = "";
			getField("legFinish_est").value = "";
			getField("swivel_est").display = display.visible;
			switch (pricingType.value) {
				case 'resale':
					swivelCost.value = swivelCost_des;
					break;

				case 'regular':
					swivelCost.value = swivelCost_reg;
					break;
			}
			break;

		default :
			wBaseCost.value = 0;
			metalLegsCost.value = 0;
			swivelCost.value = 0;
			wBaseType.display = display.hidden;
			metalLegsType.display = display.hidden;
			wBaseCost.display = display.hidden;
			metalLegsCost.display = display.hidden;
			swivelCost.display = display.hidden;
			woodFinish.display = display.hidden;
			metalFinish.display = display.hidden;
			getField("swivel_est").display = display.hidden;
			getField("stdLegs_est").value = "";
			getField("wBase_cl1_est").value = "";
			getField("wBase_cl2_est").value = "";
			getField("metal_cl1_est").value = "";
			getField("metal_cl2_est").value = "";
			getField("legFinish_est").value = "";
}