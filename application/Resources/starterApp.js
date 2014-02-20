//Launch Screen
var launchWindow = Ti.UI.createWindow({
    backgroundColor: '#ffffff',
    title: 'Thoroughbred Studbook'
});

//Navigation Window
var navigationWindow = Ti.UI.iOS.createNavigationWindow({
    window: launchWindow,
});

var header = Ti.UI.createView({
	backgroundColor: "#392408",
	height: 50,
	top: 0
});

var logoView = Ti.UI.createImageView({
	image: "images/logo.png",
	left: -100,
	top: 5,
	height: 45
});

var searchView = Ti.UI.createImageView({
	image: "images/search.png",
	right: -225,
	height: 25
});

//Footer

/*var footer = Ti.UI.createView({
	backgroundColor: "392408",
	height: 50,
	bottom: 0
});
var viewAllTab = Ti.UI.createImageView({
	image: "images/all.png",
	left: -100,
	top: 5,
	height: 30
});

var viewByLTETab = Ti.UI.createImageView({
	image: "images/lte.png",
	left: 50,
	top: 5,
	height: 30
});

var viewByAgeTab = Ti.UI.createImageView({
	image: "images/age.png",
	left: 100,
	top: 5,
	height: 30
});

var viewByLocationTab = Ti.UI.createImageView({
	image: "images/Location.png",
	left: 150,
	top: 5,
	height: 30
});

var rankingTab = Ti.UI.createImageView({
	image: "images/ranking.png",
	left: 200,
	top: 5,
	height: 30
});

footer.add(rankingTab);
footer.add(viewByLocationTab);
footer.add(viewByAgeTab);
footer.add(viewByLTETab);
footer.add(viewAllTab); */

//Image Carousel
var carousel = Ti.UI.createView({
    top: 60,
    height: 200
});
var image1 = Ti.UI.createImageView({
    image: "images/afleetAlex.jpg",
    height: 175,
});
var image2 = Ti.UI.createImageView({
    image: "images/alphabetSoup.jpg",
    height: 175
});
var image3 = Ti.UI.createImageView({
    image: "images/bigBrown.jpg",
    height: 175
});
var image4 = Ti.UI.createImageView({
    image: "images/curlin.jpg",
    height: 175
});
var image5 = Ti.UI.createImageView({
    image: "images/lemonDropKid.jpg",
    height: 175
});

var scrollableView = Ti.UI.createScrollableView({
    views: [image1, image2, image3, image4, image5],
    showPagingControl: true,
    pagingControlColor: '#e2e2e2',
    width: 225
});
//end carousel
header.add(searchView);
header.add(logoView);
//launchWindow.add(footer);
launchWindow.add(header);
carousel.add(scrollableView);
launchWindow.add(carousel);

navigationWindow.open();