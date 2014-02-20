// create tab group for app
var tabGroup = Titanium.UI.createTabGroup();

// home Window and Tab
var homeScreen = Titanium.UI.createWindow({
    title: 'Thoroughbred Studbook',
    backgroundColor: '#fff'
});


var homeTab = Titanium.UI.createTab({
    icon: 'images/all.png',
    title: 'Home',
    window: homeScreen
});

// Begin Header
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


var homeTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	top: 25
});

var getDetail = function(){
	//create new page for each horse
    var detailsWindow = Titanium.UI.createWindow({
        title: this.title,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        tabBarHidden: true
    });
    
    var detailsWindowContainer = Ti.UI.createScrollView({
		layout: "vertical"
	});
    
    var horseImage = Ti.UI.createImageView({
		image: this.photo,
		top: 10,
		left: 10,
		right: 10
	});
	
	var blurbView = Ti.UI.createView({
		top: -375,
		right: 10,
		left: 10
	});
	
	var blurbText = Ti.UI.createLabel({
		text: this.blurb,
		font: {fontFamily: "Helvetica Neue", fontSize: 16, fontWeight: "bold"},
		color: "#4aa2c6",
		textAlign: "left"
	});
	
	var overallRaceView = Ti.UI.createView({
		top: -1200,
		right: 10,
		left: 10
	});
	
	var overallRaceText = Ti.UI.createLabel({
		text: this.overallRecord + " $" + this.lte + " LTE",
		font: {fontFamily: "Helvetica Neue", fontSize: 16, fontWeight: "bold"},
		color: "#f76d10",
		textAlign: "left"
	});
	
	var statisticsView = Ti.UI.createView({
		top: -1900,
		right: 10,
		left: 10
	});
	
	var statisticsText = Ti.UI.createLabel({
		text: this.title + " is a " + this.statistics + " owned by " + this.ownedBy + ". He is sired by " + this.sire + ", and out of " + this.dam + " (" + this.damsire + "). He is the winner of " + this.gsw + ". " + this.title + " currently has a stud fee of $" + this.studFee + ".00, with a live foal guarantee." + this.title + " is the sire of " + this.runners + ", his top five currently running foals.",
		font: {fontFamily: "Helvetica Neue", fontSize: 12},
		color: "#392408",
		textAlign: "left"
	});
	
	detailsWindowContainer.add(horseImage);
	blurbView.add(blurbText);
	detailsWindowContainer.add(blurbView);
	
	
	overallRaceView.add(overallRaceText);
	detailsWindowContainer.add(overallRaceView);
 	statisticsView.add(statisticsText);
	detailsWindowContainer.add(statisticsView);
	
	detailsWindow.add(detailsWindowContainer);
	
    var detailsTabGroup = Titanium.UI.createTabGroup({
        bottom: 0,
        width: '100%',
        height: '100%'
    });
    var detailsTab = Titanium.UI.createTab({
        icon: 'KS_nav_views.png',
        width: '100%',
        height: '100%',
        title: 'detailsWindow',
        window: detailsWindow
    });
    detailsTabGroup.addTab(detailsTab);
    detailsTabGroup.open();
 
    var closeBtn = Titanium.UI.createButton({
        title: 'Close'
    });
    detailsWindow.leftNavButton = closeBtn;
    closeBtn.addEventListener('click',
    function(e) {
        detailsTabGroup.animate({
            duration: 400,
            bottom: 500
        },
        function() {
            detailsTabGroup.close();
        });
    });
};

var mySections = [];

Ti.include("json.js");

homeTable.setData(mySections);

homeScreen.add(homeTable);

header.add(logoView);
homeScreen.add(header);
//End Home screen

// home Window and Tab
var searchPage = Titanium.UI.createWindow({
    title: 'Search Stallions',
    backgroundColor: '#fff'
});

var search = Titanium.UI.createSearchBar({
    barColor:'#fff', 
    showCancel:true,
    height:43,
    top:0,
});

//search function

//search function


searchPage.add(search);

var searchTab = Titanium.UI.createTab({
    icon: 'images/search.png',
    title: 'Search',
    window: searchPage
});

//  add tabs
tabGroup.addTab(homeTab);
tabGroup.addTab(searchTab);
//tabGroup.addTab(ageTab);
//tabGroup.addTab(locationTab);
//tabGroup.addTab(rankingTab);
 
// open tab group
tabGroup.open();

