//Comment for Initial Push to GitHub
var navGroup = Ti.UI.createTabGroup();

//Login Screen

var loginWindow = Ti.UI.createWindow({
	title : "APHA Yearling Longe Line Judging",
	url : "login.js",
	tabBarHidden : true,
	backgroundColor : "#dbedf7",
	backgroundGradient : {
		type : 'linear',
		startPoint : {
			x : '0%',
			y : '0%'
		},
		endPoint : {
			x : '100%',
			y : '100%'
		},
		colors : [{
			color : '#d0e0e9',
			offset : 0.0
		}, {
			color : '#dbedf7',
			offset : 0.5
		}]
	}
});

//Main Window
var homeWindow = Ti.UI.createWindow({
	url : 'home.js',
	title : "APHA Yearling Longe Line Judging",
	backgroundColor : "#dbedf7",
	backgroundGradient : {
		type : 'linear',
		startPoint : {
			x : '0%',
			y : '0%'
		},
		endPoint : {
			x : '100%',
			y : '100%'
		},
		colors : [{
			color : '#d0e0e9',
			offset : 0.0
		}, {
			color : '#dbedf7',
			offset : 0.5
		}]
	}
});

//Classes Window
var classesWindow = Ti.UI.createWindow({
	url : 'classes.js',
	title : "APHA Yearling Longe Line Judging",
	backgroundColor : "#dbedf7",
	backgroundGradient : {
		type : 'linear',
		startPoint : {
			x : '0%',
			y : '0%'
		},
		endPoint : {
			x : '100%',
			y : '100%'
		},
		colors : [{
			color : '#d0e0e9',
			offset : 0.0
		}, {
			color : '#dbedf7',
			offset : 0.5
		}]
	}
});


//About Window
var aboutWindow = Ti.UI.createWindow({
	url : 'about.js',
	title : "APHA Yearling Longe Line Judging",
	backgroundColor : "#dbedf7",
	backgroundGradient : {
		type : 'linear',
		startPoint : {
			x : '0%',
			y : '0%'
		},
		endPoint : {
			x : '100%',
			y : '100%'
		},
		colors : [{
			color : '#d0e0e9',
			offset : 0.0
		}, {
			color : '#dbedf7',
			offset : 0.5
		}]
	}
});

//Tabs
var loginTab = Ti.UI.createTab({
	title : "Login",
	window : loginWindow
});

var aboutTab = Ti.UI.createTab({
	title : "About",
	window : aboutWindow
});

var classesTab = Ti.UI.createTab({
	title : "Classes",
	window : classesWindow
});

var homeTab = Ti.UI.createTab({
	title : "Home",
	window : homeWindow
});

Ti.App.addEventListener('grantEntrance', function(event) {
	//homeWindow.tabBarHidden   = true;
	homeWindow.name = event.name;
	homeWindow.email = event.email;
	homeTab.window = homeWindow;
	navGroup.removeTab(loginTab);
});

navGroup.addTab(loginTab);
navGroup.addTab(aboutTab);
navGroup.addTab(classesTab);
navGroup.open(); 