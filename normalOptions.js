var result = getField("normalOptions");
var style = getField("styleOption");
var styleClass = styles[style.value].stdStyle;
var styleUpgrades = styles[style.value].upgrades;
var armWidth = styles[style.value].armWidth;
var depth = styles[style.value].styleDepth;

if (style.value != "select"){
    switch(styleClass){
		case true:
			result.value = "Standard";
		break;
		case false:
			result.value = styleUpgrades;
	    break;
        default:
			result.value = "";


    }
} else {
    result.value = "";
}