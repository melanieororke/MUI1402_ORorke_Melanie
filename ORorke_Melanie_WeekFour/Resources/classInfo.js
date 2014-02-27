var currentClasses = {
	"classOne" : {
		"headTitle" : "Stallions and Geldings",
		"footTitle" : "Open to yearling stallions and geldings.",
		"horsesEntered" : [{
			name : "Ima Lil Mirackulous",
			statistics : "2013 Bay Tobiano",
			gender : "Stallion",
			bloodlines : "Ima Lil Willie x Rackless Abandon",
			walk : 0,
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/wyatt.jpg"
		}, {
			name : "Big League Blue",
			statistics : "2013 Bay Tovero",
			gender : "Stallion",
			bloodlines : "Ima Switch Hitter x Winning Blues",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/bigleagueblue.jpg"
		}, {
			name : "Lazy Lil Simon",
			statistics : "2013 Bay Tobiano",
			gender : "Stallion",
			bloodlines : "John Simon x Dun Bein Lazy",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/lazylilsimon.jpg"
		}, {
			name : "Turn On My Charisma",
			statistics : "2013 Chestnut Overo",
			gender : "Stallion",
			bloodlines : "Ultimate Charisma x Page Turn",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/turnonmycharisma.jpg"
		}, {
			name : "Zip Me Up",
			statistics : "2013 Sorrel Tobiano",
			gender : "Stallion",
			bloodlines : "Zippin x Laced In Silver",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/zipmeup.jpg"
		}]
	},
	"classTwo" : {
		"headTitle" : "Mares",
		"footTitle" : "Open to yearling mares.",
		"horsesEntered" : [{
			name : "Chute Im Fancy",
			statistics : "2013 Sorrel Overo",
			gender : "Mare",
			bloodlines : "The Ultimate Fancy x Rootie Toot Chute",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/chuteimfancy.jpg"
		}, {
			name : "Impulsively Graceful",
			statistics : "2013 Sorrel",
			gender : "Mare",
			bloodlines : "A Scenic Impulse x Graceful Sensation",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/impulsivelygraceful.jpg"
		}, {
			name : "Blue Jean Baby",
			statistics : "2013 Sorrel Sabino",
			gender : "Mare",
			bloodlines : "Never Compromise x Levi's Show Stopper",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/bluejeanbaby.jpg"
		}, {
			name : "Sheza Sweet Ride",
			statistics : "2013 Bay Overo",
			gender : "Mare",
			bloodlines : "Hesa Special Hotrod x Sweet Ridin Prochea",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/shezasweetride.jpg"
		}, {
			name : "Dunn N Demand",
			statistics : "2013 Buckskin Overo",
			gender : "Mare",
			bloodlines : "Brooks or Dunn x Simply In Demand",
			walk : "",
			trot : "",
			lope : "",
			movementTotal : "",
			manners : "",
			conformation : "",
			circleUse : "",
			other : "",
			penalties : "",
			totalScore : "",
			photo : "images/dunnndemand.jpg"
		}]
	}
};

for (n in currentClasses) {
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle : currentClasses[n].headTitle,
		footerTitle : currentClasses[n].footTitle
	});
	for (var i = 0, j = currentClasses[n].horsesEntered.length; i < j; i++) {
		var theRow = Ti.UI.createTableViewRow({

			title : currentClasses[n].horsesEntered[i].name,
			statistics : currentClasses[n].horsesEntered[i].statistics,
			gender : currentClasses[n].horsesEntered[i].gender,
			bloodlines : currentClasses[n].horsesEntered[i].bloodlines,
			walk : currentClasses[n].horsesEntered[i].walk,
			trot : currentClasses[n].horsesEntered[i].trot,
			lope : currentClasses[n].horsesEntered[i].lope,
			movementTotal : currentClasses[n].horsesEntered[i].movementTotal,
			manners : currentClasses[n].horsesEntered[i].manners,
			conformation : currentClasses[n].horsesEntered[i].conformation,
			circleUse : currentClasses[n].horsesEntered[i].circleUse,
			other : currentClasses[n].horsesEntered[i].other,
			penalties : currentClasses[n].horsesEntered[i].penalties,
			totalScore : currentClasses[n].horsesEntered[i].totalScore,
			photo : currentClasses[n].horsesEntered[i].photo,
			index : i,
			hasChild : true,
			font : {
				fontFamily : "Helvetica Neue",
				fontSize : 14,
				fontWeight : "bold"
			},
			color : "#94b2b6"
		});
		tableSection.add(theRow);
		theRow.addEventListener("click", function(e) {
			getScoreCard(e.row);
		});

	}
	mySections.push(tableSection);
};