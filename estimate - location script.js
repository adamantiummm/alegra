var storeDetails = getField("storeDetails_est");
var finePrint = getField("finePrint_est");


switch (getField("pricingLocation").value) {
		case 'OC':
			storeDetails.value = "(949) 347-9905 - 28142 Camino Capistrano #101, Laguna Niguel, CA 92677"
			finePrint.value = "*Our associates are not on commission and therefore will never pressure you to buy, they are simply there to help you in any way. When you are ready to order, you can give this page to any Monarch Sofas employee, or email it to OrangeCounty@MonarchSofas.com letting us know that you would like to place your order. Production of fabric orders is approx. 3-6 weeks (based on fabric availability) from the time the order is placed and the deposit is processed (leather is approx. 5-10 weeks). The timeframe on COM orders is approx. 4-8 weeks, and begins when we receive your COM at our Orange County store. Additional time may be required for home delivery.";
			break;

		case 'LA':
			storeDetails.value = "(310) 202-7632 - 3223 S. La Cienega Blvd, Los Angeles, CA 90016"
			finePrint.value = "*Our associates are not on commission and therefore will never pressure you to buy, they are simply there to help you in any way. When you are ready to order, you can give this page to any Monarch Sofas employee, or email it to LosAngeles@MonarchSofas.com letting us know that you would like to place your order. Production of fabric orders is approx. 3-6 weeks (based on fabric availability) from the time the order is placed and the deposit is processed (leather is approx. 5-10 weeks). The timeframe on COM orders is approx. 4-8 weeks, and begins when we receive your COM at our Orange County store. Additional time may be required for home delivery.";
			break;

		case 'BA':
			storeDetails.value = "(650) 521-0491 - 617 Mountain View Ave #7, Belmont, CA 94002"
			finePrint.value = "*Our associates are not on commission and therefore will never pressure you to buy, they are simply there to help you in any way. When you are ready to order, you can give this page to any Monarch Sofas employee, or email it to BayArea@MonarchSofas.com letting us know that you would like to place your order. Production of fabric orders is approx. 3-7 weeks (based on fabric availability) from the time the order is placed and the deposit is processed (leather is approx. 5-11 weeks). The timeframe on COM orders is approx. 4-9 weeks, and begins when we receive your COM at our Orange County store. Additional time may be required for home delivery.";
			break;

		case 'TX':
			storeDetails.value = "(214) 760-1181 - 2100 Irving Blvd, Dallas, TX 75207"
			finePrint.value = "*Our associates are not on commission and therefore will never pressure you to buy, they are simply there to help you in any way. When you are ready to order, you can give this page to any Monarch Sofas employee, or email it to Dallas@MonarchSofas.com letting us know that you would like to place your order. Production of fabric orders is approx. 4-8 weeks (based on fabric availability) from the time the order is placed and the deposit is processed (leather is approx. 6-12 weeks). The timeframe on COM orders is approx. 5-10 weeks, and begins when we receive your COM at our Orange County store. Additional time may be required for home delivery.";
			break;

		case 'NW':
			storeDetails.value = "(949) 347-9905 - 28142 Camino Capistrano #101, Laguna Niguel, CA 92677"
			finePrint.value = "*When you are ready to order, you can give this page to any Monarch Sofas employee, or email it to Nationwide@MonarchSofas.com letting us know that you would like to place your order. Production of fabric orders is approx. 4-8 weeks (based on fabric availability) from the time the order is placed and the deposit is processed (leather is approx. 6-12 weeks). Production on COM orders is approx. 4-9 weeks, and begins when we receive your COM at our Orange County store. After production of the order is complete, shipping is generally between 2-4 weeks, depending on the shipping company’s schedule.";
			break;

		default:
			storeDetails.value = "(949) 347-9905 - 28142 Camino Capistrano #101, Laguna Niguel, CA 92677"
			finePrint.value = "*Our associates are not on commission and therefore will never pressure you to buy, they are simply there to help you in any way. When you are ready to order, you can give this page to any Monarch Sofas employee, or email it to OrangeCounty@MonarchSofas.com letting us know that you would like to place your order. Production of fabric orders is approx. 3-6 weeks (based on fabric availability) from the time the order is placed and the deposit is processed (leather is approx. 5-10 weeks). The timeframe on COM orders is approx. 4-8 weeks, and begins when we receive your COM at our Orange County store. Additional time may be required for home delivery.";
}