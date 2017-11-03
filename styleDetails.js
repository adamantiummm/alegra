var arm = getField("style_armWidth");
var depth = getField("style_depth");
var ht = getField("style_frameHt");
var style = getField("styleOption");


if (style.value != "select"){
	arm.value = styles[style.value].armWidth;
	depth.value = styles[style.value].styleDepth;
	ht.value = styles[style.value].frameHt;
} else {
	arm.value = "";
	depth.value = "";
	ht.value = "";
}