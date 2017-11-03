var subtotal = getField("subtotal");
var preSub = getField("preSub");
var guardsman = getField("guardsman");
var guardsmanCost = getField("cost.guardsman");



switch (guardsman.value) {
		case 'Yes':
			subtotal.value = Math.round(preSub.value + guardsmanCost.value);
			break;

		case 'No':
			subtotal.value = Math.round(preSub.value);
			break;
}