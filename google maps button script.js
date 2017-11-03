//alegra google maps button	

	var zip = app.response({
	cQuestion: "Enter Zip Code",
	cTitle: "Zip Code Search"});

switch(location){
	case 'OC' :

	app.launchURL("https://www.google.com/maps/dir/28142+Camino+Capistrano,+Laguna+Niguel,+CA+92677/" + zip);

	break;

	case 'LA' :

	app.launchURL("https://www.google.com/maps/dir/3223+S+La+Cienega+Blvd,+Los+Angeles,+CA+90016/" + zip);

	break;

	case 'BA' :

	app.launchURL("https://www.google.com/maps/dir/617+Mountain+View+Ave,+Belmont,+CA+94002/" + zip);

	break;

	case 'TX' :

	app.launchURL("https://www.google.com/maps/dir/2100+Irving+Blvd,+Dallas,+TX+75207/" + zip);

	break;

	case 'NW' :

	app.launchURL("http://www.google.com/maps/search/" + zip);

	break;
}