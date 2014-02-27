var aboutScreen = Ti.UI.currentWindow;

var headerView = Ti.UI.createView({
	backgroundColor : "#ffffff",
	height : 50,
	top : 0,
	shadow : {
		shadowRadius : 3,
		shadowOpacity : 1,
		shadowOffset : {
			x : 5,
			y : 5
		},
		shadowColor : "#000000"
	},
});

var headerLabel = Ti.UI.createLabel({
	text : "ABOUT THIS APPLICATION",
	top : 15,
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 16
	}
});

var aboutView = Ti.UI.createScrollView({
	top : 60,
	layout : "vertical"
});

var aboutLabel = Ti.UI.createLabel({
	left : 20,
	right : 20,
	text : "This application, which would be considered in beta testing at best, is being developed to give judges a faster way to evaluate a horse.",
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 12
	}
});

var aboutClassesLabel = Ti.UI.createLabel({
	top : 10,
	left : 20,
	right : 20,
	text : "To view a list of horses waiting to be evaluated click the classes tab. Click on the horse's name to evaluate the horse. Complete the form for the horse, and hit the DONE button. This will save your evaluation for that particular horse.",
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 12
	}
});

var aboutResultsLabel = Ti.UI.createLabel({
	top : 10,
	left : 20,
	right : 20,
	text : "Once submitted, the format of the horse detail page will update. Once a horse is evaluated, there is no way to update or change its its scores. ",
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 12
	}
});

aboutView.add(aboutLabel);
aboutView.add(aboutClassesLabel);
aboutView.add(aboutResultsLabel);
aboutScreen.add(aboutView);
headerView.add(headerLabel);
aboutScreen.add(headerView);
