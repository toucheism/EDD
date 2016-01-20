$(document).ready();
// notes
	//barcelona shortlink google: https://goo.gl/maps/eAfmfsZrbU32
	//alero shortlink: https://goo.gl/maps/x484Gaw72iq
	// tico shortlink google: https://goo.gl/maps/1M35jSfpnKN2
	//theHeights shortlink: https://goo.gl/maps/GciFHzY979N2
	//thaiXing: https://goo.gl/maps/QgVCqUTxtaA2

//how it works
var instructions = $('.how-it-works-link');
var instructionsPopup = $('.how-it-works-popup')
instructionsPopup.hide()

instructions.click(function howItWorks(){
instructionsPopup.slideToggle().show();
})

var x = $('.x');
// x.onHover.animate({animateTo:360,duration:1500})

x.click(function x(){
instructionsPopup.slideToggle();
})




// **** Eat of EDD
 $('#eatHere').hide();

$('#eat-img-id').click(function eats(){
	event.preventDefault();

	var eatHere = $('#eatHere')

	eatHere.hide()
	eatHere.animate({width: 'toggle' });

	var barcelona = ['images/barcelona.jpg','Barcelona', '1622 14th St NW, Washington, DC 20009', '$$ - moderate', 'www.barcelonawinebar.com', 'https://goo.gl/maps/eAfmfsZrbU32' ]
	var alero = ['images/alero.jpg', 'Alero', '1301 U st. N.W D.C', '$$ - moderate', 'www.alerorestaurant.com', 'https://goo.gl/maps/x484Gaw72iq']
	var tico = ['images/tico.jpg', 'Tico', '1926 14th St NW, Washington, DC 20009', '$$$ - expensive', 'www.ticodc.com', 'https://goo.gl/maps/1M35jSfpnKN2']
	var theHeights = ['images/theHeights.jpg', 'The Heights', '3115 14th St NW, Washington, DC 20010', '$$$ - expensive', 'www.theheightsdc.com', 'https://goo.gl/maps/GciFHzY979N2']
	var thaiXing = ['images/thaiXing.jpg', 'Thai Xing', '515 Florida Ave NW, Washington, DC 20001', '$$ - moderate', 'www.thaix-ing.com', 'https://goo.gl/maps/QgVCqUTxtaA2']

	var eat = [barcelona, alero, tico, theHeights, thaiXing]

	var todaysPlace = eat[Math.floor(Math.random() * 5)];
				// console.log(todaysPlace)
	$('#eatHere').css("background-image", todaysPlace[0]);
	$('#eat-img-id').attr('src', todaysPlace[0]);
	$('#eatNameId').html(todaysPlace[1]); //note: .className+='eyhey'
	$('#eatAddressId').html(todaysPlace[2]);
	$('#eatPriceId').html(todaysPlace[3]);

	var eatNameId = $('#eatNameId');
	var eatAddressId = $('#eatAddressId');

		eatNameId.click(function viewListing(){
		window.open('http://' + todaysPlace[4],'_blank');
		// document.location.reload(todaysPlace[4])
	})
		eatAddressId.click(function viewOnMap(){
			window.open(todaysPlace[5], '_blank');
		})


})

// **** Drink of EDD
// drinks: Front page, The Brixton, Vinoteca, The Gibson,
	//theFrontPage: https://goo.gl/maps/uV71XhBbXSE2 1333 New Hampshire Ave NW, Washington, DC 20036
	//theGibson shortlink: https://goo.gl/maps/PMEiYQzXaT12 2009 14th St NW, Washington, DC 20009
	// vinoteca shortlink: https://goo.gl/maps/whgbxvoNiAr 1940 11th St NW, Washington, DC 20001
	//theBrixton: https://goo.gl/maps/fb3A2a5Zbe42 901 U St NW, Washington, DC 20001
	//fadoIrishPub: https://goo.gl/maps/CP9bfAbiwVz 808 7th St NW, Washington, DC 20001

$('#drinkHere').hide();

$('#drink-img-id').click(function drinks(){
	event.preventDefault();

	var drinkHere = $('#drinkHere')

	drinkHere.hide()
	drinkHere.animate({width: 'toggle' });

	var theFrontPage = ['images/theFrontPage.jpg','The Front Page', '1333 New Hampshire Ave NW, Washington, DC 20036', '$$ - moderate']
	var theGibson = ['images/theGibson.jpg', 'The Gibson', '2009 14th St NW, Washington, DC 20009', '$$ - moderate']
	var vinoteca = ['images/vinoteca.jpg', 'Vinoteca', '1940 11th St NW, Washington, DC 20001', '$ - fair']
	var theBrixton = ['images/theBrixton.jpg', 'The Brixton', '901 U St NW, Washington, DC 20001', '$ - fair']
	var fadoIrishPub = ['images/fadoIrishPub.jpg', 'Fado Irish Pub', '808 7th St NW, Washington, DC 20001', '$ - fair']

	var drink = [theFrontPage, theGibson, vinoteca, theBrixton, fadoIrishPub]

	var todaysPlace = drink[Math.floor(Math.random() * 5)];
				// console.log(todaysPlace)
	$('#eatHere').css("background-image", todaysPlace[0]);
	$('#drink-img-id').attr('src', todaysPlace[0]);
	$('#drinkNameId').html(todaysPlace[1]); //note: .className+='eyhey'
	$('#drinkAddressId').html(todaysPlace[2]);
	$('#drinkPriceId').html(todaysPlace[3]);

})


//**** Dance of EDD
// lostSociety: https://goo.gl/maps/AWqNavGumc32  2001 14th St NW, Washington, DC 20009
// policy: https://goo.gl/maps/qKsyjqqXZZx  1904 14th St NW, Washington, DC 20009
// 18thStreetLoung: https://goo.gl/maps/EU7HmfP4hw72 1212 18th St NW, Washington, DC 20036
//cubaLibre: https://goo.gl/maps/EXZeiigqP3C2 801 9th St NW, Washington, DC 20001
//grandCentral: https://goo.gl/maps/GFRa9HLY7kM2  2447 18th St NW, Washington, DC 20009

$('#danceHere').hide();

$('#dance-img-id').click(function dance(){
	event.preventDefault();

	var danceHere = $('#danceHere');

	danceHere.hide();
	danceHere.animate({width: 'toggle' });

	var lostSociety = ['images/lostSociety.jpg','Lost Society', '2001 14th St NW, Washington, DC 20009', '$$ - moderate']
	var policy = ['images/policy.jpg', 'Policy', '1904 14th St NW, Washington, DC 20009', '$$ - moderate']
	var eighteenthStreetLounge = ['images/eighteenthStreetLounge.jpg', 'Eighteenth Street Lounge', '1212 18th St NW, Washington, DC 20036', '$ - fair']
	var cubaLibre = ['images/cubaLibre.jpg', 'Cuba Libre', '801 9th St NW, Washington, DC 20001', '$ - fair']
	var grandCentral = ['images/grandCentral.jpg', 'Grand Central', '2447 18th St NW, Washington, DC 20009', '$ - fair']

	var dance = [lostSociety, policy, eighteenthStreetLounge, cubaLibre, grandCentral];

	var todaysPlace = dance[Math.floor(Math.random() * 5)];
				// console.log(todaysPlace)
	$('#danceHere').css("background-image", todaysPlace[0]);
	$('#dance-img-id').attr('src', todaysPlace[0]);
	$('#danceNameId').html(todaysPlace[1]); //note: .className+='eyhey'
	$('#danceAddressId').html(todaysPlace[2]);
	$('#dancePriceId').html(todaysPlace[3]);

})

