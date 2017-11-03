var result = getField("cost.sleeper");
var sleeperCheck = getField("sleeper");
var sleeperSize = getField("sleeperSize");
var sleeperCheck_est = getField("sleeper_est");
var sleeperSize_est = getField("sleeperSize_est");
var sleeperDetails_est = getField("sleeperDetails_est");
var cost_reg = prices[location].sleeper;
var cost_des = cost_reg * designer;


if (sleeperCheck.value == "Yes"){
	result.display = display.visible;
	sleeperSize.display = display.visible;
	sleeperCheck_est.value = "Yes";
	sleeperSize_est.value = sleeperSize.value;
	sleeperDetails_est.value = "Some details may need modified to accommodate sleeper.";
	switch (pricingType.value) {
		case 'resale':
			result.value = cost_des;
		break;

		case 'regular':
			result.value = cost_reg;
		break;
	}
} else {
	result.value = 0;
	result.display = display.hidden;
	sleeperSize.display = display.hidden;
	sleeperCheck_est.value = "";
	sleeperSize_est.value = "";
	sleeperDetails_est.value = "";
}