//LENGTH 1 SEATING SPACE
var result = getField("seating1");
var length = getField("length1");
var armWidth;
var depth = getField("calc_depth");
var hasArm = getField("length1_armCheck");
var hasChaise = getField("length1_chaiseCheck");
var chaiseSeat = getField("length1_chaiseSeating");


//ARM OR NO ARM (DONE)
if (hasArm.value == "Yes")
	armWidth = getField("calc_armWidth").value;

if (hasArm.value != "Yes")
	armWidth = 0;


//IF NOTHING, NOTHING (DONE)
if (length.value == "")
{
		result.value = "";
}

//IF SOMETHING (DONE)
if (length.value != "")
{
		//IF NO CHAISE (DONE)
		if (hasChaise.value != "Yes")
			result.value = length.value - armWidth - depth.value;

		//IF YES CHAISE (DONE)
		if (hasChaise.value == "Yes")
			result.value = length.value - armWidth - depth.value - chaiseSeat.value;
}


//LENGTH 2 SEATING SPACE
var result = getField("seating2");
var length = getField("length2");
var armWidth;
var depth = getField("calc_depth");
var hasArm = getField("length2_armCheck");
var hasChaise = getField("length2_chaiseCheck");
var chaiseSeat = getField("length2_chaiseSeating");


//ARM OR NO ARM (DONE)
if (hasArm.value == "Yes")
	armWidth = getField("calc_armWidth").value;

if (hasArm.value != "Yes")
	armWidth = 0;


//IF NOTHING, NOTHING (DONE)
if (length.value == "")
{
		result.value = "";
}

//IF SOMETHING (DONE)
if (length.value != "")
{
		//IF NO CHAISE (DONE)
		if (hasChaise.value != "Yes")
			result.value = length.value - armWidth - depth.value;

		//IF YES CHAISE (DONE)
		if (hasChaise.value == "Yes")
			result.value = length.value - armWidth - depth.value - chaiseSeat.value;
}

