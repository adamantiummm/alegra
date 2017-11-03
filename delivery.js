var result = getField("delivery_est");

var del30Check = getField("del_30mi");
var del60Check = getField("del_60mi");
var del90Check = getField("del_90mi");
var del120Check = getField("del_120mi");
var delExtra = getField("del_exPieces");

var del30Cost = prices[location].del_30;
var del30CostField = getField("cost.del_30mi");
var del60Cost = prices[location].del_60;
var del60CostField = getField("cost.del_60mi");
var del90Cost = prices[location].del_90;
var del90CostField = getField("cost.del_90mi");
var del120Cost = prices[location].del_120;
var del120CostField = getField("cost.del_120mi");
var delExtraCost = delExtra.value * prices[location].del_addlPiece;
var delExtraCostField = getField("cost.del_exPieces");
var delCustomCost = getField("cost.del_custom");

hide(del30CostField);
hide(del60CostField);
hide(del90CostField);
hide(del120CostField);

if (getField("pricingLocation").value === "NW"){
		hide(getField("del_30mi"));
		hide(getField("del_60mi"));
		hide(getField("del_90mi"));
		hide(getField("del_120mi"));
		hide(getField("del_exPieces"));
		hide(getField("cost.del_custom"));
		hide(getField("text_delivery"));
		hide(getField("text_30mi"));
		hide(getField("text_60mi"));
		hide(getField("text_90mi"));
		hide(getField("text_120mi"));
		hide(getField("text_exPieces"));
		hide(getField("text_customDel"));
} else {
		show(getField("del_30mi"));
		show(getField("del_60mi"));
		show(getField("del_90mi"));
		show(getField("del_120mi"));
		show(getField("del_exPieces"));
		show(getField("cost.del_custom"));
		show(getField("text_delivery"));
		show(getField("text_30mi"));
		show(getField("text_60mi"));
		show(getField("text_90mi"));
		show(getField("text_120mi"));
		show(getField("text_exPieces"));
		show(getField("text_customDel"));
		
		if (delExtra.value != ""){
			delExtraCostField.value = delExtraCost;
			show(delExtraCostField);
		} else {
			delExtraCostField.value = 0;
			hide(delExtraCostField);
		}


		if (del30Check.value === "Yes") {
			result.value = "$" + (del30Cost + delExtraCost) + " (w/in 30 mi)";
			del30CostField.value = del30Cost;
			setZero(del60CostField);
			setZero(del90CostField);
			setZero(del120CostField);
			setZero(delCustomCost);
			show(del30CostField);
			hide(del60CostField);
			hide(del90CostField);
			hide(del120CostField);

		} else if (del60Check.value === "Yes") {
			result.value = "$" + (del60Cost + delExtraCost) + " (w/in 60 mi)";
			del60CostField.value = del60Cost;
			setZero(del30CostField);
			setZero(del90CostField);
			setZero(del120CostField);
			setZero(delCustomCost);
			show(del60CostField);
			hide(del30CostField);
			hide(del90CostField);
			hide(del120CostField);

		} else if (del90Check.value === "Yes") {
			result.value = "$" + (del90Cost + delExtraCost) + " (w/in 90 mi)";
			del90CostField.value = del90Cost;
			setZero(del30CostField);
			setZero(del60CostField);
			setZero(del120CostField);
			setZero(delCustomCost);
			show(del90CostField);
			hide(del30CostField);
			hide(del60CostField);
			hide(del120CostField);

		} else if (del120Check.value === "Yes") {
			result.value = "$" + (del120Cost + delExtraCost) + " (w/in 120 mi)";
			del120CostField.value = del120Cost;
			setZero(del30CostField);
			setZero(del60CostField);
			setZero(del90CostField);
			setZero(delCustomCost);
			show(del120CostField);
			hide(del30CostField);
			hide(del60CostField);
			hide(del90CostField);

		} else if (delCustomCost.value != "") {
			result.value = "$" + (delCustomCost.value + delExtraCost);
			setZero(del30CostField);
			setZero(del60CostField);
			setZero(del90CostField);
			setZero(del120CostField);
			hide(del30CostField);
			hide(del60CostField);
			hide(del90CostField);
			hide(del120CostField);

		} else if (del30Check.value != "Yes" && del60Check.value != "Yes" && del90Check.value != "Yes" && del120Check.value != "Yes" && delCustomCost.value === ""){
			result.value = "";
			setZero(del30CostField);
			setZero(del60CostField);
			setZero(del90CostField);
			setZero(del120CostField);
			setBlank(delCustomCost);
			hide(del30CostField);
			hide(del60CostField);
			hide(del90CostField);
			hide(del120CostField);

		} else {
			result.value = "";
			setZero(del30CostField);
			setZero(del60CostField);
			setZero(del90CostField);
			setZero(del120CostField);
			hide(del30CostField);
			hide(del60CostField);
			hide(del90CostField);
			hide(del120CostField);
		}
}

