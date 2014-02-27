// For the login set up of my applications, I found a great tutorial at
// http://code.tutsplus.com/tutorials/titanium-user-authentication-part-1--mobile-3728
// I used this tutorial to help me set up the overall look and feel of my login form
// and how to make the login go to another window when successful.
var loginNow = Ti.UI.currentWindow;

var welcomeView = Ti.UI.createScrollView({
	top : 0,
	left : 0,
	layout : "vertical"
});

var welcomeMessage = Ti.UI.createLabel({
	text : "Please log in to continue.",
	top : 10,
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 16
	}
});

var username = Ti.UI.createTextField({
	color : '#336699',
	top : 10,
	left : 10,
	width : 300,
	height : 40,
	hintText : 'Username',
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var password = Ti.UI.createTextField({
	color : '#336699',
	top : 10,
	left : 10,
	width : 300,
	height : 40,
	hintText : 'Password',
	passwordMask : true,
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginButton = Ti.UI.createButton({
	title : "Login",
	top : 10,
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
	backgroundGradient : {
		type : 'linear',
		colors : ['#687291', '#a6b6e7'],
		startPoint : {
			x : 0,
			y : 0
		},
		endPoint : {
			x : 2,
			y : 50
		},
		backFillStart : false
	},
	borderWidth : 1,
	borderColor : '#687291'
});

var loginInfoLabel = Ti.UI.createLabel({
	top : 10,
	left : 20,
	right : 20,
	text : "Please use the username \" Judge \" and the password \" Login \" to login to the beta version. ",
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 12
	}
});

loginButton.addEventListener('click', function(e) {
	if (username.value == 'Judge' && password.value == 'Login') {
		alert("Thank you for logging in.");
		Ti.App.fireEvent('grantEntrance', {
			name : "Judge One",
			email : "judgeOne@aphajudging.com"
		});

	} else {
		alert("Username/Password are required");
	}
});

loginNow.add(welcomeView);
welcomeView.add(welcomeMessage);
welcomeView.add(username);
welcomeView.add(password);
welcomeView.add(loginButton);
welcomeView.add(loginInfoLabel);

