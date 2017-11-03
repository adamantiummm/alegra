var preSub = getField("preSub");
var others = getField("cost.connectors").value +
				getField("cost.skirt").value +
				getField("cost.slip").value +
				getField("cost.styleChanges").value +
				getField("cost.wBase").value +
				getField("cost.metalLegs").value +
				getField("cost.swivel").value +
				getField("cost.tufting").value +
				getField("cost.grid").value +
				getField("cost.topstitch").value +
				getField("cost.doublestitch").value +
				getField("cost.nailheads").value +
				getField("cost.armcaps").value +
				getField("cost.sleeper").value +
				getField("cost.back_lifetimePoly").value +
				getField("cost.back_trillium").value +
				getField("cost.back_1090").value +
				getField("cost.back_foam").value +
				getField("cost.seat_premFoam").value +
				getField("cost.seat_trillium").value +
				getField("cost.seat_1090").value +
				getField("extraCharge").value;
var baseSizeFabLeather;
var totalFabInc = getField("cost.totalFabricUpcharge");
var numSofas = getField("#sofas");
var numLoves = getField("#loves");
var numChaises = getField("#chaisesORwedges");
var numChairs = getField("#chairs");
var exLength = getField("cost.exLength");
var exDepth = getField("cost.exDepth");
var costSofasFab_reg = prices[location].sofa_fab * numSofas.value;
var costSofasFab_des = costSofasFab_reg * designer;
var costLovesFab_reg = prices[location].love_fab * numLoves.value;
var costLovesFab_des = costLovesFab_reg * designer;
var costChaisesFab_reg = prices[location].love_fab * numChaises.value;
var costChaisesFab_des = costChaisesFab_reg * designer;
var costChairsFab_reg = prices[location].chair_fab * numChairs.value;
var costChairsFab_des = costChairsFab_reg * designer;
var costSofasCom_reg = prices[location].sofa_com * numSofas.value;
var costSofasCom_des = costSofasCom_reg * designer;
var costLovesCom_reg = prices[location].love_com * numLoves.value;
var costLovesCom_des = costLovesCom_reg * designer;
var costChaisesCom_reg = prices[location].love_com * numChaises.value;
var costChaisesCom_des = costChaisesCom_reg * designer;
var costChairsCom_reg = prices[location].chair_com * numChairs.value;
var costChairsCom_des = costChairsCom_reg * designer;
var costSofasLeather, costLovesLeather, costChaisesLeather, costChairsLeather;



switch (getField("mainUpholstery").value) {
		case 'Fabric':
				switch (pricingType.value) {
					case 'resale':
					baseSizeFabLeather = 
					costSofasFab_des + costLovesFab_des + costChaisesFab_des + costChairsFab_des + exLength.value + exDepth.value + totalFabInc.value;
					break;

					case 'regular':
					baseSizeFabLeather = 
					costSofasFab_reg + costLovesFab_reg + costChaisesFab_reg + costChairsFab_reg + exLength.value + exDepth.value + totalFabInc.value;
					break;
				}
			break;

		case 'Leather':
				switch (getField("leather.grade").value) {
					case 'select':
						costSofasLeather = 0;
						costLovesLeather = 0;
						costChaisesLeather = 0;
						costChairsLeather = 0;
						break;

					case 'A':
						switch (pricingType.value) {
							case 'resale':
								costSofasLeather = (prices[location].sofa_leatherA * numSofas.value) * designer;
								costLovesLeather = (prices[location].love_leatherA * numLoves.value) * designer;
								costChaisesLeather = (prices[location].love_leatherA * numChaises.value) * designer;
								costChairsLeather = (prices[location].chair_leatherA * numChairs.value) * designer;
							break;

							case 'regular':
								costSofasLeather = prices[location].sofa_leatherA * numSofas.value;
								costLovesLeather = prices[location].love_leatherA * numLoves.value;
								costChaisesLeather = prices[location].love_leatherA * numChaises.value;
								costChairsLeather = prices[location].chair_leatherA * numChairs.value;
							break;
						}
						break;

					case 'B':
						switch (pricingType.value) {
							case 'resale':
								costSofasLeather = (prices[location].sofa_leatherB * numSofas.value) * designer;
								costLovesLeather = (prices[location].love_leatherB * numLoves.value) * designer;
								costChaisesLeather = (prices[location].love_leatherB * numChaises.value) * designer;
								costChairsLeather = (prices[location].chair_leatherB * numChairs.value) * designer;
							break;

							case 'regular':
								costSofasLeather = prices[location].sofa_leatherB * numSofas.value;
								costLovesLeather = prices[location].love_leatherB * numLoves.value;
								costChaisesLeather = prices[location].love_leatherB * numChaises.value;
								costChairsLeather = prices[location].chair_leatherB * numChairs.value;
							break;
						}
						break;

					case 'C':
						switch (pricingType.value) {
							case 'resale':
								costSofasLeather = (prices[location].sofa_leatherC * numSofas.value) * designer;
								costLovesLeather = (prices[location].love_leatherC * numLoves.value) * designer;
								costChaisesLeather = (prices[location].love_leatherC * numChaises.value) * designer;
								costChairsLeather = (prices[location].chair_leatherC * numChairs.value) * designer;
							break;

							case 'regular':
								costSofasLeather = prices[location].sofa_leatherC * numSofas.value;
								costLovesLeather = prices[location].love_leatherC * numLoves.value;
								costChaisesLeather = prices[location].love_leatherC * numChaises.value;
								costChairsLeather = prices[location].chair_leatherC * numChairs.value;
							break;
						}
						break;

					case 'D':
						switch (pricingType.value) {
							case 'resale':
								costSofasLeather = (prices[location].sofa_leatherD * numSofas.value) * designer;
								costLovesLeather = (prices[location].love_leatherD * numLoves.value) * designer;
								costChaisesLeather = (prices[location].love_leatherD * numChaises.value) * designer;
								costChairsLeather = (prices[location].chair_leatherD * numChairs.value) * designer;
							break;

							case 'regular':
								costSofasLeather = prices[location].sofa_leatherD * numSofas.value;
								costLovesLeather = prices[location].love_leatherD * numLoves.value;
								costChaisesLeather = prices[location].love_leatherD * numChaises.value;
								costChairsLeather = prices[location].chair_leatherD * numChairs.value;
							break;
						}
						break;

					case 'E':
						switch (pricingType.value) {
							case 'resale':
								costSofasLeather = (prices[location].sofa_leatherE * numSofas.value) * designer;
								costLovesLeather = (prices[location].love_leatherE * numLoves.value) * designer;
								costChaisesLeather = (prices[location].love_leatherE * numChaises.value) * designer;
								costChairsLeather = (prices[location].chair_leatherE * numChairs.value) * designer;
							break;

							case 'regular':
								costSofasLeather = prices[location].sofa_leatherE * numSofas.value;
								costLovesLeather = prices[location].love_leatherE * numLoves.value;
								costChaisesLeather = prices[location].love_leatherE * numChaises.value;
								costChairsLeather = prices[location].chair_leatherE * numChairs.value;
							break;
						}
						break;

					default:
						costSofasLeather = 0;
						costLovesLeather = 0;
						costChaisesLeather = 0;
						costChairsLeather = 0;
				}

			baseSizeFabLeather = 
				costSofasLeather + costLovesLeather + costChaisesLeather + costChairsLeather + exLength.value + exDepth.value;
			break;

		case 'C.O.M.':
				switch (pricingType.value) {
					case 'resale':
					baseSizeFabLeather = 
					costSofasCom_des + costLovesCom_des + costChaisesCom_des + costChairsCom_des + exLength.value + exDepth.value + totalFabInc.value;
					break;

					case 'regular':
					baseSizeFabLeather = 
					costSofasCom_reg + costLovesCom_reg + costChaisesCom_reg + costChairsCom_reg + exLength.value + exDepth.value + totalFabInc.value;
					break;
				}
			break;

		default:
		baseSizeFabLeather = 0;
}



preSub.value = baseSizeFabLeather + parseInt(others,10);


