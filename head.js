var location = getField("pricingLocation").value;
var pricingType = getField("pricingType");
var numPieces = getField("numPieces").value;
var numSofas = getField("#sofas").value;
var numLoves = getField("#loves").value;
var numChaisesOrWedges = getField("#chaisesORwedges").value;
var numChairs = getField("#chairs").value;
var mainUpholstery = getField("mainUpholstery").value;
var numPieces =
numSofas + numLoves + numChaisesOrWedges + numChairs;

var hide = function(hideField){
	hideField.display = display.hidden;
};

var show = function(showField){
	showField.display = display.visible;
};

var setZero = function(zeroField){
	zeroField.value = 0;
};

var setEmpty = function(blankField){
	blankField.value = "";
};

var designer = 0.8;


switch (pricingType.value) {
		case 'resale':
			show(getField("designer_text"));
			show(getField("desPricing_est"));
			show(getField("text_designer_est"));
		break;

		case 'regular':
			hide(getField("designer_text"));
			hide(getField("desPricing_est"));
			hide(getField("text_designer_est"));
		break;
}