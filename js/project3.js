//Author: Sharon "Meisha" Ray
//Term: SDI 1109 
//Project 3
//Title: The Chocolate Exchange

//variables

var place = "The 24 Hour Chocolate Exchange"
	form = true,
	money2 = 80,
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
		var getTaxiCabRide = function(){
		var taxiCabRide = 75/3			
		console.log("How much do we owe you?");
			console.log("$75.00 please."); 
			console.log("We each owe $" + taxiCabRide + " to the cab driver.");
			console.log("Here you go, $80.00");
			console.log("Thank you. Here is your change.");
	
//while-loop//	
		while(money2 > cabRide){
		console.log(money2 - cabRide);
		money2--;
		}
		};
			getTaxiCabRide();
		
	console.log("Awesome, let\'s go inside.");



//Method: Procedure - Inside The Chocolate Exchange	
	var store = {
		place: "The 24 Hour Chocolate Exchange", //property:string
		sales: true, //property:boolean
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
	console.log(Math.floor(Math.random()*8));
	console.log(otherTypes.type2);
	console.log("and ");
	console.log(Math.floor(Math.random()*19));
	console.log(otherTypes.type3);	

// return//
	var haveMoney = function(haveEnough, notEnough){
		var myMoney;
			if(haveEnough >= 80) {
				if (notEnough === false) {
					console.log("I have enough money to buy all the chocolates.");
					}else{
					console.log("Shucks! I don't have enough to buy all of the chocolates.");
					}
					}else{ 
					console.log("I can buy some of the chocolates.");
			}
			myMoney = "I have $" + money2 + " to buy all the chocolates."
			return myMoney;
			};
		var canBuy = haveMoney(80, true);
			console.log(haveMoney);
				
//return	
	/*var shoppingCart = function (itemName){
		var cartHold = [];
		var totalCart = function (items){
			cartHold.push(items);
		};
		return {
			"name": itemName,
			"total": cartHold,
			"cartHold": totalCart
			};		
		};
		console.log("I have 10 chocolates in my cart.");*/	
	
//Answering questions on form//
//boolean//
	console.log("Can you three please feel out these customer inquiry forms?");
			if(form = true){
		console.log("Yes we can.")
		}else{
			console.log("I'm sorry, we don't have time. Maybe next time.");
	};	

	console.log("Here you go. Just fill in the info there.");
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
		
	