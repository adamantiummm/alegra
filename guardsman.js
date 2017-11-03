var result = getField("cost.guardsman");
var preSub = getField("preSub");
var guardsman = getField("guardsman");
var guardsman_est = getField("guardsman_est");
var guardsmanCost_est = getField("cost.guardsman_est");

result.value = preSub.value * 0.15;
guardsmanCost_est.value = result.value;


switch (guardsman.value) {
		case 'Yes':
			guardsman_est.value = "Yes";
			break;

		case 'No':
			guardsman_est.value = "No";
			break;

		default:
			guardsman_est.value = "";
}


//inc or not inc text for est
if (getField("guardsman_est").value === "Yes"){
    getField("gman_inc").display = display.visible;
    getField("gman_notInc").display = display.hidden;
} else {
    getField("gman_inc").display = display.hidden;
    getField("gman_notInc").display = display.visible;
}