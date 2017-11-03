var result = getField("cost.basePlusSizing");
var numSofas = getField("#sofas");
var numLoves = getField("#loves");
var numChaises = getField("#chaisesORwedges");
var numChairs = getField("#chairs");
var exLength = getField("exLength");
var exLengthCost;
var exDepthCost;

//length
if (exLength.value === 0 || exLength.value === ""){
	exLengthCost = 0;
}

if (exLength.value >= 1 && exLength.value <= 10){
	exLengthCost = prices[location].exLength_fab;
}

if (exLength.value >= 11 && exLength.value <= 20){
	exLengthCost = prices[location].exLength_fab * 2;
}

if (exLength.value >= 21 && exLength.value <= 30){
	exLengthCost = prices[location].exLength_fab * 3;
}

if (exLength.value >= 31 && exLength.value <= 40){
	exLengthCost = prices[location].exLength_fab * 4;
}

if (exLength.value >= 41 && exLength.value <= 50){
	exLengthCost = prices[location].exLength_fab * 5;
}

if (exLength.value >= 51 && exLength.value <= 60){
	exLengthCost = prices[location].exLength_fab * 6;
}

if (exLength.value >= 61 && exLength.value <= 70){
	exLengthCost = prices[location].exLength_fab * 7;
}

if (exLength.value >= 71 && exLength.value <= 80){
	exLengthCost = prices[location].exLength_fab * 8;
}

if (exLength.value >= 81 && exLength.value <= 90){
	exLengthCost = prices[location].exLength_fab * 9;
}

if (exLength.value >= 91 && exLength.value <= 100){
	exLengthCost = prices[location].exLength_fab * 10;
}

if (exLength.value >= 101 && exLength.value <= 110){
	exLengthCost = prices[location].exLength_fab * 11;
}

if (exLength.value >= 111 && exLength.value <= 120){
	exLengthCost = prices[location].exLength_fab * 12;
}

if (exLength.value >= 121 && exLength.value <= 130){
	exLengthCost = prices[location].exLength_fab * 13;
}

if (exLength.value >= 131 && exLength.value <= 140){
	exLengthCost = prices[location].exLength_fab * 14;
}

if (exLength.value >= 141 && exLength.value <= 150){
	exLengthCost = prices[location].exLength_fab * 15;
}

if (exLength.value >= 151 && exLength.value <= 160){
	exLengthCost = prices[location].exLength_fab * 16;
}

if (exLength.value >= 161 && exLength.value <= 170){
	exLengthCost = prices[location].exLength_fab * 17;
}

if (exLength.value >= 171 && exLength.value <= 180){
	exLengthCost = prices[location].exLength_fab * 18;
}

if (exLength.value >= 181 && exLength.value <= 190){
	exLengthCost = prices[location].exLength_fab * 19;
}

if (exLength.value >= 191 && exLength.value <= 200){
	exLengthCost = prices[location].exLength_fab * 20;
}

if (exLength.value > 200){
	exLengthCost = app.alert("Too Much Additional Length, Price Alternately!",3);
}

//depth
switch(getField("exDepth").value){
case 0:
exDepthCost = 0;
break;
case 6:
exDepthCost = prices[location].exDepth_fab;
break;
case 12:
exDepthCost = prices[location].exDepth_fab * 2;
break;
case 18:
exDepthCost = prices[location].exDepth_fab * 3;
break;
case 24:
exDepthCost = prices[location].exDepth_fab * 4;
break;
case 30:
exDepthCost = prices[location].exDepth_fab * 5;
break;
case 36:
exDepthCost = prices[location].exDepth_fab * 6;
break;
default:
exDepthCost = 0;
break;
};


//this script does not factor reg or resale, because it's just used for waterfall/slip/dTuft scripts, and those fields contain the calc for the discount

result.value = 
	(numSofas.value * prices[location].sofa_fab) + 
	(numLoves.value * prices[location].love_fab) + 
	(numChaises.value * prices[location].love_fab) + 
	(numChairs.value * prices[location].chair_fab) + 
	exLengthCost + exDepthCost;




	