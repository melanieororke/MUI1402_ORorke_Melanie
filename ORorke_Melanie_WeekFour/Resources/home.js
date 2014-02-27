var homeScreen = Ti.UI.currentWindow;

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
	text : "HOME",
	top : 15,
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 16
	}
});

var homeView = Ti.UI.createScrollView({
	top : 60,
	layout : "vertical"
});

var aboutButton = Ti.UI.createButton({
	title : "About This App",
	url: "about.js",
	top : 20,
	width : 300,
	height : 40,
	borderRadius : 2,
	font : {
		fontFamily : 'Helvetica Neue',
		fontWeight : 'bold',
		fontSize : 14
	},
	style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	borderRadius : 10,
	backgroundColor : "#fff",
	color : "#687291"
});

var classesButton = Ti.UI.createButton({
	title : "View Current Classes",
	url: "classes.js",
	top : 20,
	width : 300,
	height : 40,
	borderRadius : 2,
	font : {
		fontFamily : 'Helvetica Neue',
		fontWeight : 'bold',
		fontSize : 14
	},
	style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	borderRadius : 10,
	backgroundColor : "#fff",
	color : "#687291"
});



homeView.add(aboutButton);
homeView.add(classesButton);
homeScreen.add(homeView);
headerView.add(headerLabel);
homeScreen.add(headerView);
