//Author: Sharon "Meisha" Ray
//Term: SDI 1109 
//Project 3
//Title: The Chocolate Exchange

//variables

var place = "The 24 Hour Chocolate Exchange",
	form = true,
	money2 = 80,
	money3 = 90,
	cabRide = 75,
	says = function(talking){
		console.log(talking);
};
 
 	otherTypes = {
	type1: "Orange Revenge",
	type2: "Russian Blueberry",
	type3: "Expresso Rage",
	type4: "Fudge Blast",
	type5: "Orange Passion",		
};

	

//Start//
	console.log("Today I was looking through one of my kitchen cabinets and found a variety of different types of chocolates. I remember seeing a commercial on television about a place called " + place + ", and thought what a great idea. With all of the different types of chocolates I have, I could go and exchange them for some chocolates I would actually eat. I called Shanna and Crystal and told them about my idea. They both wanted to go with me to " + place + ".");

	
//Arrival at The Chocolate Exchange//
//Property:Number//	
//Mutator & Accessor//	

	console.log("How much do we owe you?");
	console.log("$75.00 please."); 
		/*var taxiCabRide = 75,
			numberInCab = 3,
			getTaxiCabRide = function(taxiCabRide, numberInCab){
			if(numberInCab > 2 !== 3 ){
			taxiCabRide = 37.50;
			}else if (numberInCab > 3){
			taxiCabRide = 25;
			}else {
			taxiCabRide = 75;
		} 
			return a/b;
	}
			getTaxiCabRide();
			
			console.log("We each owe $" + taxiCabRide + " to the cab driver.");
			console.log("Here you go, $80.00");
			console.log("Thank you. Here is your change.");
	
//while-loop//	
		while(money2 > cabRide){
		console.log(money2 - cabRide);
		money2--;
		};
			getTaxiCabRide();*/
		
	console.log("Awesome, let\'s go inside.");

//Method: Procedure - Inside The Chocolate Exchange	
//Argument: Object//
//method: function//
//Property:String//
//Property:Boolean//
		var store = {
		place: "The 24 Hour Chocolate Exchange", 
		sales: true, 
		storeOpen: function(counterLady){
			says("Hello. My name is " + counterLady + ". How may I help you?");
				if(store.sales == true){
			says("We have a few sales today.");
			says("Awesome, we\'ll have to check those out.");
				}else{
			says("I\'m sorry we don't have any sales today.");
			says("Oh shucks.");
				}
			}
		};
			store.storeOpen("Mary");
			
			says("I have some chocolates I\'d like to exchange if I could.");
			says("Let's see what you have there. Which would you like to exchange?");
			says("I\'d like to exchange my ");
	
		var handleData = function (json){
		for (var i=0; i < json.myChocolateTypes.length; i++){
			var types = json.myChocolateTypes[i];
		console.log(types.choc1 + ", " + types.choc2 + ", " + types.choc3);
		};
	};
			handleData(json1);
			
		console.log("for");
	var handleData2 = function(json){
//Nested for-loop//
		for(var e=0; e <  json.exchangeFor.length; e++){
			var types1 = json.exchangeFor[e];
				console.log(types1.milkChoc + ", " + types1.whiteChoc + ", " + types1.bitterChoc);
				};
			};
				handleData2(json2);
				
//Exchange and purchases//
		says("I\'d also like to purchase some chocolates as well.");
		says("Feel free to shop and you can exchange these when you check out. Also check out our sales we are having today. They are on the back wall.");
		says("Thank you, we will. I want to buy some other types of chocolate.");
		says("I want to get ");
		
//Math//
	console.log(Math.floor(Math.random()*8));
	console.log(otherTypes.type2);
	console.log("and ");
	console.log(Math.floor(Math.random()*19));
	console.log(otherTypes.type3);	

//Return: Array//
//Property: Array//
//Argument: Array//
	console.log("I have in my cart ")
	function addToCart() {
		var peppermint = 5;
		var coconut = 3;
		var blueChocos = 7;
			return [peppermint, coconut, blueChocos];		
		}
		var chocolate2 = addToCart();
	console.log(chocolate2[0] + " peppermint chocos and "  +  chocolate2[1] + " coconut chocos " + chocolate2[2] + " Blue Chocos.");
		 
//Return: Object//
//Property: Object//
	console.log("On my wish list I have")
	var yummy = {
		rainbowChocos: 8,
		cherryChocos: 2,
		haloTreats: 10,
		myWishList: function() {
		return {"wish1": yummy.rainbowChocos, "wish2": yummy.cherryChocos, "wish3": yummy.haloTreats};t
		}
	}
		var myWishes = myWishList();

	console.log(myWishes.wish1 + " Rainbow Chocos " + myWishes.wish2 + ", Cherry Chocos, and " + myWishes.wish3 + " Halo Treats.");
	
	/*function myWishList() {
		var rainbowChocos = 8;
		var cherryChocos = 2;
		var haloTreats = 10;
			return {"wish1": rainbowChocos, "wish2": cherryChocos, "wish3": haloTreats};t
	}
		var myWishes = myWishList();
		console.log(myWishes.wish1 + " Rainbow Chocos " +  myWishes.wish2 + ", Cherry Chocos, and " + myWishes.wish3 + " Halo Treats."); 	*/

//Mutator & Accessor//
	console.log("You have some money in your account, if you\'d like to use that towards your purchase today. You may also deposit some money in your account if you choose.");
	
			
// Return: String //
//Argument: Boolean//
//Nested Conditional//
//Return: Number//
//Return: Boolean//
//Argument: Number//
	var haveMoney = function(haveEnough, notEnough){
		var myMoney;
			if(haveEnough >= 60) {
				if (notEnough === true) {
					console.log("I have enough money to buy all the chocolates.");
					}else{
					console.log("Shucks! I don't have enough to buy all of the chocolates.");
					}
					}else{ 
					console.log("I can buy some of the chocolates.");
			}
			myMoney = "I have $" + money3 + " to buy all the chocolates.";
			return myMoney;
			};
		var canBuy = haveMoney(90, true);
			console.log(canBuy);
				
// Conditional - Answering questions on form//
	console.log("Can you three please feel out these customer inquiry forms?");
			if(form = true){
		console.log("Yes we can.")
		}else{
			console.log("I'm sorry, we don't have time. Maybe next time.");
	};		
		
	console.log("Here you go. Just fill in the info there.");
	
//Returns today's date// 
 	console.log("What's is today's date?");
 		var date = new Date();
		console.log(date);
//for-loop//		
		var handleData3 = function(json){
			for(var f=0; f < json.myForm.length; f++){
				var info = json.myForm[f];
					console.log(info.name + ", " + info.age + ", " + info.phone);
					};
				};
					handleData3(json3);
						
	console.log("Thank you very much Ladies. Come back and see us. Have a great day.");

	
//Left the store//
	console.log("Taxi!");
	console.log("THE END");
	
