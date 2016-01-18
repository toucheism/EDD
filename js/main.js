// Data


// Eats
// var barcelona = {
//   'name'  : 'Barcelona',
//   'address'  : '14th an U st.',
//   'price'  : '$$',
//   'img' : 'images/linguini.jpg'
// };

// //Drinks
// var Massa14 = {
//   'name'  : 'Massa 14',
//   'address'  : '14th an S st.',
//   'price'  : '$$'
// };

// // Dance
// var cubaLibre = {
//   'name'  : 'Cuba Libre',
//   'address'  : '14th an U st.',
//   'price'  : '$$'
// };

// button click event

// $('.details').hide();

// document.location.reload()

$('#eat-listing').click(function eats(){
	event.preventDefault();

	// $('.details').load(document.URL +  ' .details');

	var details = $('.details')


	details.hide()
	// details.reload()
	// details.slideToggle();
	details.animate({width: 'toggle'});


				// places to eat

				// 	var eat={
				// 'barcelona' : ['images/linguini.jpg','Barcelona', '14th Street', '$$' ],
				// 'massa14' : ['images/cachaca.jpg','Massa14', '14th Street', '$$$', ],
				// }
	var barcelona = ['images/linguini.jpg','Barcelona', '14th St. NW', '$$']
	var alero = ['images/cachaca.jpg', 'Alero', '1301 U st. N.W D.C', '$$']
	var tico = ['images/cachaca.jpg', 'Tico', '1301 U st. N.W D.C', '$$']

	var eat = [barcelona, alero, tico]

				// selecting a random array item
				// var selectEat = ["Apple", "Orange", "Banana", "Cherry"];

	var todaysPlace = eat[Math.floor(Math.random() * 3)];
				// return document.todaysPlace;

				// console.log(todaysPlace)


	$('#eatHere').css("background-image", todaysPlace[0]);
	$('#eat-listing').attr('src', todaysPlace[0]);
	$('#eatNameId').html(todaysPlace[1]).className+='heyhey';
	$('#eatAddressId').html(todaysPlace[2]);
	$('#eatPriceId').html(todaysPlace[3]);
			//$('#eatHere').location.reload();
			//window.location.reload();



	// $('#addressEat').replaceWith(barcelona.address);
	// $('#priceEat').replaceWith(barcelona.price);

	// console.log(input)

})




// function initMap() {
//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     scrollwheel: false,
//     zoom: 8
//   });
// }

// $('#eat-listing').append(<input)