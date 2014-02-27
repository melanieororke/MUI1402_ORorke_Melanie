var classesScreen = Ti.UI.currentWindow;

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
	text : "CURRENT ENTERED HORSES",
	top : 15,
	color : "#687291",
	font : {
		fontFamily : "Helvetica Neue",
		fontSize : 16
	}
});

var entryTable = Ti.UI.createTableView({
	style : Ti.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor : 'transparent',
	top : 5
});

var getScoreCard = function(row) {
	//create new page for each horse
	var viewEntry = Titanium.UI.createWindow({
		title : row.name,
		width : '100%',
		height : '100%',
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

	var viewEntryContainer = Ti.UI.createScrollView({
		layout : "vertical"
	});

	var horseImage = Ti.UI.createImageView({
		image : row.photo,
		top : 10,
		left : 10,
		right : 10
	});

	viewEntryContainer.add(horseImage);

	var entryName = Ti.UI.createLabel({
		left : 20,
		right : 20,
		text : row.title,
		color : "#687291",
		font : {
			fontFamily : "Helvetica Neue",
			fontSize : 30,
			fontWeight : "bold"
		}
	});

	var entryStatistics = Ti.UI.createLabel({
		left : 20,
		text : row.statistics + " " + row.gender,
		color : "#94b2b6",
		font : {
			fontFamily : "Helvetica Neue",
			fontSize : 14,
			fontWeight : "bold"
		}
	});

	var entryBloodlines = Ti.UI.createLabel({
		left : 20,
		text : row.bloodlines,
		color : "#aeadad",
		font : {
			fontFamily : "Helvetica Neue",
			fontSize : 12
		}
	});

	//format differently for horses who have been judged
	if (currentClasses.classOne.horsesEntered[row.index].gender == "Stallion" && currentClasses.classOne.horsesEntered[row.index].total >= 0 || currentClasses.classTwo.horsesEntered[row.index].gender == "Mare" && currentClasses.classTwo.horsesEntered[row.index].total >= 0) {

		var viewScoresContainer = Ti.UI.createScrollView({
			layout : "vertical"
		});

		var horseImage = Ti.UI.createImageView({
			image : row.photo,
			top : 10,
			left : 10,
			right : 10
		});

		viewScoresContainer.add(horseImage);

		var judgedName = Ti.UI.createLabel({
			left : 20,
			right : 20,
			text : row.title,
			color : "#687291",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 30,
				fontWeight : "bold"
			}
		});

		var judgedStatistics = Ti.UI.createLabel({
			left : 20,
			text : row.statistics + " " + row.gender,
			color : "#94b2b6",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			}
		});

		var judgedBloodlines = Ti.UI.createLabel({
			left : 20,
			text : row.bloodlines,
			color : "#aeadad",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 12
			}
		});
		var judgedTotalScore = Ti.UI.createLabel({
			top: 15,
			left : 20,
			right : 20,
			text : "Combined Score: " + row.total,
			color : "#687291",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 26,
				fontWeight : "bold"
			}
		});
		
		var totalMovementScore = Ti.UI.createLabel({
			left : 20,
			text : "Overall Movement Score: " + row.movementTotal,
			color : "#94b2b6",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			}
		});
		
		var judgedWalkScore = Ti.UI.createLabel({
			left : 20,
			text : "Walk Score: " + row.walk + "  Trot Score: " + row.trot + "  Lope Score: " + row.lope,
			color : "#aeadad",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14
			}
		});
		
		var judgedManners = Ti.UI.createLabel({
			left : 20,
			text : "Manners/Expression/Attitude: " + row.manners,
			color : "#94b2b6",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			}
		});
		
		var judgedConformation = Ti.UI.createLabel({
			left : 20,
			text : "Conformation: " + row.conformation,
			color : "#94b2b6",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			}
		});
		
		//circle use
		var judgedCircleUse = Ti.UI.createLabel({
			left : 20,
			text : "Circle Use: " + row.circleUse,
			color : "#94b2b6",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			}
		});
		
		var judgedOther = Ti.UI.createLabel({
			left : 20,
			text : "Other Points: " + row.other,
			color : "#94b2b6",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			}
		});
		
		var judgedPenalties = Ti.UI.createLabel({
			left : 20,
			text : "Penalty Points: " + row.penalties,
			color : "#94b2b6",
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			}
		});
		//other
		//penalties
		
		viewScoresContainer.add(judgedName);
		viewScoresContainer.add(judgedStatistics);
		viewScoresContainer.add(judgedBloodlines);
		viewScoresContainer.add(judgedTotalScore);
		viewScoresContainer.add(totalMovementScore);
		viewScoresContainer.add(judgedWalkScore);
		viewScoresContainer.add(judgedManners);
		viewScoresContainer.add(judgedCircleUse);
		viewScoresContainer.add(judgedOther);
		viewScoresContainer.add(judgedPenalties);
		viewEntry.add(viewScoresContainer);

	} else {
		var walkScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Walk Score (1-6)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var trotScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Jog or Trot Score (1-14)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var lopeScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Lope or Canter Score (1-14)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var mannersScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Manners/Expression/Attitude Score (1-14)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var mannersScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Manners/Expression/Attitude Score (1-14)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var conformationScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Conformation Score (1-6)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var circleUseScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Use of Circle Score (1-3)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var othersScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Others Score (1-3)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		var penaltiesScore = Ti.UI.createTextField({
			top : 10,
			color : '#336699',
			left : 10,
			width : 300,
			height : 40,
			hintText : 'Penalties Score (0 to -5)',
			keyboardType : Ti.UI.KEYBOARD_DEFAULT,
			returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
		});

		//Submit Scores
		var submitScoresButton = Ti.UI.createButton({
			top : 10,
			title : "Submit Scores",
			width : 150,
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

		viewEntryContainer.add(entryName);
		viewEntryContainer.add(entryStatistics);
		viewEntryContainer.add(entryBloodlines);
		viewEntryContainer.add(walkScore);
		viewEntryContainer.add(trotScore);
		viewEntryContainer.add(lopeScore);
		viewEntryContainer.add(mannersScore);
		viewEntryContainer.add(circleUseScore);
		viewEntryContainer.add(othersScore);
		viewEntryContainer.add(penaltiesScore);
		viewEntryContainer.add(submitScoresButton);
		viewEntry.add(viewEntryContainer);

		submitScoresButton.addEventListener('click', function(f) {

			if (row.gender == "Stallion") {
				function toNum(num) {
					return parseFloat(num);
				}


				currentClasses.classOne.horsesEntered[row.index].walk = walkScore.value;
				row.walk = currentClasses.classOne.horsesEntered[row.index].walk;
				currentClasses.classOne.horsesEntered[row.index].trot = trotScore.value;
				row.trot = currentClasses.classOne.horsesEntered[row.index].trot;
				currentClasses.classOne.horsesEntered[row.index].lope = lopeScore.value;
				row.lope = currentClasses.classOne.horsesEntered[row.index].lope;
				currentClasses.classOne.horsesEntered[row.index].movementTotal = toNum(walkScore.value) + toNum(trotScore.value) + toNum(lopeScore.value);
				row.movementTotal = currentClasses.classOne.horsesEntered[row.index].movementTotal;
				currentClasses.classOne.horsesEntered[row.index].manners = mannersScore.value;
				row.manners = currentClasses.classOne.horsesEntered[row.index].manners;
				currentClasses.classOne.horsesEntered[row.index].circleUse = circleUseScore.value;
				row.circleUse = currentClasses.classOne.horsesEntered[row.index].circleUse;
				currentClasses.classOne.horsesEntered[row.index].other = othersScore.value;
				row.other = currentClasses.classOne.horsesEntered[row.index].other;
				currentClasses.classOne.horsesEntered[row.index].penalties = penaltiesScore.value;
				row.penalties = currentClasses.classOne.horsesEntered[row.index].penalties;
				currentClasses.classOne.horsesEntered[row.index].total = toNum(walkScore.value) + toNum(trotScore.value) + toNum(lopeScore.value) + toNum(mannersScore.value) + toNum(circleUseScore.value) + toNum(othersScore.value) + toNum(penaltiesScore.value);
				row.total = currentClasses.classOne.horsesEntered[row.index].total;
				
				scoreCardTabGroup.close();


			} else {
				currentClasses.classTwo.horsesEntered[row.index].walk = walkScore.value;
				row.walk = currentClasses.classTwo.horsesEntered[row.index].walk;
				currentClasses.classTwo.horsesEntered[row.index].trot = trotScore.value;
				row.trot = currentClasses.classTwo.horsesEntered[row.index].trot;
				currentClasses.classTwo.horsesEntered[row.index].lope = lopeScore.value;
				row.lope = currentClasses.classTwo.horsesEntered[row.index].lope;
				currentClasses.classTwo.horsesEntered[row.index].movementTotal = toNum(walkScore.value) + toNum(trotScore.value) + toNum(lopeScore.value);
				row.movementTotal = currentClasses.classTwo.horsesEntered[row.index].movementTotal;
				currentClasses.classTwo.horsesEntered[row.index].manners = mannersScore.value;
				row.manners = currentClasses.classTwo.horsesEntered[row.index].manners;
				currentClasses.classTwo.horsesEntered[row.index].circleUse = circleUseScore.value;
				row.circleUse = currentClasses.classTwo.horsesEntered[row.index].circleUse;
				currentClasses.classTwo.horsesEntered[row.index].other = othersScore.value;
				row.other = currentClasses.classTwo.horsesEntered[row.index].other;
				currentClasses.classTwo.horsesEntered[row.index].penalties = penaltiesScore.value;
				row.penalties = currentClasses.classTwo.horsesEntered[row.index].penalties;
				currentClasses.classTwo.horsesEntered[row.index].total = toNum(walkScore.value) + toNum(trotScore.value) + toNum(lopeScore.value) + toNum(mannersScore.value) + toNum(circleUseScore.value) + toNum(othersScore.value) + toNum(penaltiesScore.value);
				row.total = currentClasses.classTwo.horsesEntered[row.index].total;
				
				scoreCardTabGroup.close();

			}

		});
		
		

	};

	var scoreCardTabGroup = Titanium.UI.createTabGroup({
		bottom : 0,
		width : '100%',
		height : '100%'
	});
	var viewEntryTab = Titanium.UI.createTab({
		//icon: 'KS_nav_views.png',
		width : '100%',
		height : '100%',
		title : 'View Entry Details',
		window : viewEntry
	});
	scoreCardTabGroup.addTab(viewEntryTab);
	scoreCardTabGroup.open();

	var closeBtn = Titanium.UI.createButton({
		title : 'Close'
	});
	viewEntry.leftNavButton = closeBtn;
	closeBtn.addEventListener('click', function(e) {
		scoreCardTabGroup.animate({
			duration : 400,
			bottom : 500
		}, function() {
			scoreCardTabGroup.close();
		});
	});
};
//end getScoreCardFunction

var mySections = [];

Ti.include("classInfo.js");

entryTable.setData(mySections);

classesScreen.add(entryTable);
headerView.add(headerLabel);
classesScreen.add(headerView);
