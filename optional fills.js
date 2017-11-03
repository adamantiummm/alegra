//optional - lifetime poly backs
var chairPoly, lovePoly, chaisePoly, sofaPoly, exPoly;

switch (pricingType.value) {
		case 'resale':
			chairPoly = (prices[location].lifetimePoly_chair * numChairs.value) * designer;
			lovePoly = (prices[location].lifetimePoly_love * numLoves.value) * designer;
			chaisePoly = (prices[location].lifetimePoly_love * numChaises.value) * designer;
			sofaPoly = (prices[location].lifetimePoly_sofa * numSofas.value) * designer;
			exPoly = (prices[location].lifetimePoly_exInch * getField("exLength").value) * designer;
		break;

		case 'regular':
			chairPoly = prices[location].lifetimePoly_chair * numChairs.value;
			lovePoly = prices[location].lifetimePoly_love * numLoves.value;
			chaisePoly = prices[location].lifetimePoly_love * numChaises.value;
			sofaPoly = prices[location].lifetimePoly_sofa * numSofas.value;
			exPoly = prices[location].lifetimePoly_exInch * getField("exLength").value;
		break;
}

var lifePolyCost = chairPoly + chaisePoly + lovePoly + sofaPoly + exPoly;

getField("opt.lifetimePoly").value = "+$" + Math.round(lifePolyCost)
+ " (optional)";


if (getField("opt.back_lifetimePoly").value == "Yes"){
getField("opt.lifetimePoly").display=display.visible;
} else {
getField("opt.lifetimePoly").display=display.hidden;
}




//optional - trillium backs
var chairTrillium, loveTrillium, chaiseTrillium, sofaTrillium, exTrillium;

switch (pricingType.value) {
		case 'resale':
			chairTrillium = (prices[location].trillium_chair * numChairs.value) * designer;
			loveTrillium = (prices[location].trillium_love * numLoves.value) * designer;
			chaiseTrillium = (prices[location].trillium_love * numChaises.value) * designer;
			sofaTrillium = (prices[location].trillium_sofa * numSofas.value) * designer;
			exTrillium = Math.round((prices[location].trillium_exInch * getField("exLength").value) * designer);
		break;

		case 'regular':
			chairTrillium = prices[location].trillium_chair * numChairs.value;
			loveTrillium = prices[location].trillium_love * numLoves.value;
			chaiseTrillium = prices[location].trillium_love * numChaises.value;
			sofaTrillium = prices[location].trillium_sofa * numSofas.value;
			exTrillium = Math.round(prices[location].trillium_exInch * getField("exLength").value);
		break;
}

var trilliumCost = chairTrillium + chaiseTrillium + loveTrillium + sofaTrillium + exTrillium;

getField("opt.trilliumBacks").value = "+$" + Math.round(trilliumCost)
+ " (optional)";


if (getField("opt.back_trillium").value == "Yes"){
getField("opt.trilliumBacks").display=display.visible;
} else {
getField("opt.trilliumBacks").display=display.hidden;
}




//optional - ten 90 backs
var chairTen90, loveTen90, chaiseTen90, sofaTen90, exTen90;

switch (pricingType.value) {
		case 'resale':
			chairTen90 = (prices[location].ten90_chair * numChairs.value) * designer;
			loveTen90 = (prices[location].ten90_love * numLoves.value) * designer;
			chaiseTen90 = (prices[location].ten90_love * numChaises.value) * designer;
			sofaTen90 = (prices[location].ten90_sofa * numSofas.value) * designer;
			exTen90 = Math.round((prices[location].ten90_exInch * getField("exLength").value) * designer);
		break;

		case 'regular':
			chairTen90 = prices[location].ten90_chair * numChairs.value;
			loveTen90 = prices[location].ten90_love * numLoves.value;
			chaiseTen90 = prices[location].ten90_love * numChaises.value;
			sofaTen90 = prices[location].ten90_sofa * numSofas.value;
			exTen90 = Math.round(prices[location].ten90_exInch * getField("exLength").value);
		break;
}

var ten90Cost = chairTen90 + loveTen90 + chaiseTen90 + sofaTen90 + exTen90;

getField("opt.1090backs").value = "+$" + Math.round(ten90Cost)
+ " (optional)";


if (getField("opt.back_1090").value == "Yes"){
getField("opt.1090backs").display=display.visible;
} else {
getField("opt.1090backs").display=display.hidden;
}


//optional - foam backs
var chairFoam, loveFoam, chaiseFoam, sofaFoam, exFoam;

switch (pricingType.value) {
		case 'resale':
			chairFoam = (prices[location].premFoam_chair * numChairs.value) * designer;
			loveFoam = (prices[location].premFoam_love * numLoves.value) * designer;
			chaiseFoam = (prices[location].premFoam_love * numChaises.value) * designer;
			sofaFoam = (prices[location].premFoam_sofa * numSofas.value) * designer;
			exFoam = Math.round((prices[location].premFoam_exInch * getField("exLength").value) * designer);
		break;

		case 'regular':
			chairFoam = prices[location].premFoam_chair * numChairs.value;
			loveFoam = prices[location].premFoam_love * numLoves.value;
			chaiseFoam = prices[location].premFoam_love * numChaises.value;
			sofaFoam = prices[location].premFoam_sofa * numSofas.value;
			exFoam = Math.round(prices[location].premFoam_exInch * getField("exLength").value);
		break;
}

var foamCost = chairFoam + loveFoam + chaiseFoam + sofaFoam + exFoam;

getField("opt.foamBacks").value = "+$" + Math.round(foamCost)
+ " (optional)";


if (getField("opt.back_foam").value == "Yes"){
getField("opt.foamBacks").display=display.visible;
} else {
getField("opt.foamBacks").display=display.hidden;
}



//optional - premium foam seats
var chairFoam, loveFoam, chaiseFoam, sofaFoam, exFoam;

switch (pricingType.value) {
		case 'resale':
			chairFoam = (prices[location].premFoam_chair * numChairs.value) * designer;
			loveFoam = (prices[location].premFoam_love * numLoves.value) * designer;
			chaiseFoam = (prices[location].premFoam_love * numChaises.value) * designer;
			sofaFoam = (prices[location].premFoam_sofa * numSofas.value) * designer;
			exFoam = Math.round((prices[location].premFoam_exInch * getField("exLength").value) * designer);
		break;

		case 'regular':
			chairFoam = prices[location].premFoam_chair * numChairs.value;
			loveFoam = prices[location].premFoam_love * numLoves.value;
			chaiseFoam = prices[location].premFoam_love * numChaises.value;
			sofaFoam = prices[location].premFoam_sofa * numSofas.value;
			exFoam = Math.round(prices[location].premFoam_exInch * getField("exLength").value);
		break;
}

var foamCost = chairFoam + loveFoam + chaiseFoam + sofaFoam + exFoam;

getField("opt.premFoam").value = "+$" + Math.round(foamCost)
+ " (optional)";


if (getField("opt.seat_premFoam").value == "Yes"){
getField("opt.premFoam").display=display.visible;
} else {
getField("opt.premFoam").display=display.hidden;
}




//optional - trillium seats
var chairTrillium, loveTrillium, chaiseTrillium, sofaTrillium, exTrillium;

switch (pricingType.value) {
		case 'resale':
			chairTrillium = (prices[location].trillium_chair * numChairs.value) * designer;
			loveTrillium = (prices[location].trillium_love * numLoves.value) * designer;
			chaiseTrillium = (prices[location].trillium_love * numChaises.value) * designer;
			sofaTrillium = (prices[location].trillium_sofa * numSofas.value) * designer;
			exTrillium = Math.round((prices[location].trillium_exInch * getField("exLength").value) * designer);
		break;

		case 'regular':
			chairTrillium = prices[location].trillium_chair * numChairs.value;
			loveTrillium = prices[location].trillium_love * numLoves.value;
			chaiseTrillium = prices[location].trillium_love * numChaises.value;
			sofaTrillium = prices[location].trillium_sofa * numSofas.value;
			exTrillium = Math.round(prices[location].trillium_exInch * getField("exLength").value);
		break;
}

var trilliumCost = chairTrillium + chaiseTrillium + loveTrillium + sofaTrillium + exTrillium;

getField("opt.trilliumSeats").value = "+$" + Math.round(trilliumCost)
+ " (optional)";


if (getField("opt.seat_trillium").value == "Yes"){
getField("opt.trilliumSeats").display=display.visible;
} else {
getField("opt.trilliumSeats").display=display.hidden;
}




//optional - ten 90 seats
var chairTen90, loveTen90, chaiseTen90, sofaTen90, exTen90;

switch (pricingType.value) {
		case 'resale':
			chairTen90 = (prices[location].ten90_chair * numChairs.value) * designer;
			loveTen90 = (prices[location].ten90_love * numLoves.value) * designer;
			chaiseTen90 = (prices[location].ten90_love * numChaises.value) * designer;
			sofaTen90 = (prices[location].ten90_sofa * numSofas.value) * designer;
			exTen90 = Math.round((prices[location].ten90_exInch * getField("exLength").value) * designer);
		break;

		case 'regular':
			chairTen90 = prices[location].ten90_chair * numChairs.value;
			loveTen90 = prices[location].ten90_love * numLoves.value;
			chaiseTen90 = prices[location].ten90_love * numChaises.value;
			sofaTen90 = prices[location].ten90_sofa * numSofas.value;
			exTen90 = Math.round(prices[location].ten90_exInch * getField("exLength").value);
		break;
}

var ten90Cost = chairTen90 + loveTen90 + chaiseTen90 + sofaTen90 + exTen90;

getField("opt.1090seats").value = "+$" + Math.round(ten90Cost)
+ " (optional)";


if (getField("opt.seat_1090").value == "Yes"){
getField("opt.1090seats").display=display.visible;
} else {
getField("opt.1090seats").display=display.hidden;
}
