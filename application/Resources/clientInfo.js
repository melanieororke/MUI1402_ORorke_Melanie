var myJSON = {
    "stallions": {
        "information": [{
           name: "Afleet Alex",
           statistics: "2002 Bay Thoroughbred Stallion",
           enteredStud: "2006",
           sire: "Northern Afleet",
           dam: "Maggy Hawk",
           damsire: "Hawkster",
           studFee: "12,500",
           ownedBy: "Gainesway, Lexington, Kentucky",
           overallRecord: "(12) 8-2-1",
           lte: "2,765,8000",
           gsw: "
				["Hopeful S.", "G1 ", "7f ", "D ", ["Devils Disciple ", "Flamenco ", "Consolidator ", "Storm Surge ", "Wild Nature(GB) ", "Winning Expression "],
				["Sandford S.", "G2 ", "6f ", "D ", ["Flamenco ", "Consolidator ", "Winning Expression ", "Departing Now ", "Lunarpal ", "Smokescreen ", "Calypso Band ", "Maximus C ", "Gold Joy ", "Fire Path "],
				["Preakness S.", "G1 ", "9.5f ", "D ", ["Scrappy T ", "Giacoma ", "Sun King ", "High Limit ", "Noble Causeway ", "Greeley's Galaxy ", "Malibu Moonshine ", "Closing Argument ", "High Fly ", "Hal's Image ", "Wilko ", "Galloping Grocer ", "Going Wild "],
				["Belmont S.", "G1 ", "12f ", "D ", ["Andromeda's Hero ", "Nolan's Cat ", "Indy Storm ", "A.P. Arrow ", "Chekhov ", "Giacomo ", "Southern Africa ", "Watchmon ", "Reverberate ", "Pinpoint "],
				["Arkansas Derby ", "G2 ", "9f ", "D ", ["Flower Alley ", "Andromeda's Hero ", "Real Dandy ", "Greater Good ", "Canteen ", "Rush Bay ", "Wild Desert ", "Cat Shaker ", "Batson Challenge "],
			]", // end GSW	
           blurb: "Leading 4th Crop Sire of Graded Stakes Winners. Nineteen Stakes Winners, 10 Graded Stakes Winners lifetime, including G1 StakesWinner Dublin & Afleet Express. 2011 Breeder’s Cup Winner Afleet Again.",
           runners: "
				["Afleet Express ", "Bitter Sweet(JPN) ", "Afleet Again ", "Miss Valentine ", "Afleeting Lady ",
		    ]", // end Runners
            photo: "images/afleetAlex.jpg",
            credit: "The Blood-Horse Stallion Register"
          },
                
        ]}; //End JSON

        for (n in myJSON) {
            var tableSection = Ti.UI.createTableViewSection({

            });
            for (var i = 0, j = myJSON[n].information.length; i < j; i++) {
                var theRow = Ti.UI.createTableViewRow({
                    title: myJSON[n].information[i].name,
                    statistics: myJSON[n].information[i].statistics,
                    hasChild: true,
                    font: {
                        fontFamily: "Arial",
                        fontSize: 14
                    }
                });
                tableSection.add(theRow);
                theRow.addEventListener("click", getDetail);
            }
            mySections.push(tableSection);
        };