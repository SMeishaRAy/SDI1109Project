//Author: Sharon "Meisha" Ray
//Term: SDI 1109 
//Project 3
//Title: The Chocolate Exchange

//variables

var place = "The Chocolate Exchange",
	time = 10,
	money2 = 80,
	cabRide = 75,
	counterLady = "Mary",
 
 	otherTypes = {
	type1: "Orange Revenge",
	type2: "Russian Blueberry",
	type3: "Expresso Rage",
	type4: "Fudge Blast",
	
	form = false,	
};
//Start//
	console.log("Today I was looking through one of my kitchen cabinets and found a variety of different types of chocolates. I remember seeing a commercial on television about a place called " + place + ", and thought what a great idea. With all of the different types of chocolates I have, I could go and exchange them for some chocolates I would actually eat. I called Shanna and told her about my idea and she wanted to go with me.");

//Arrival at The Chocolate Exchange//
	var getTaxiCabRide = function(){
		var taxiCabRide = 75/2
			console.log("How much do we owe you?");
			console.log("$75.00 please."); 
			console.log("We each owe $" + taxiCabRide + "0 to the cab driver.");
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
			
//Inside The Chocolate Exchange//
	console.log("Hello. My name is " + counterLady + ". How may I help you?");
	if(time < 10){
	console.log("Hello. Good Morning.");
	}else{
		console.log("Hello. Good Afternoon.");
	};
	console.log("I'd like to exchange these chocolates if I could.");
	console.log("Let's see what you have there. Which would you like to exchange?");
	console.log("I\'d like to exchange my ");
	
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
	console.log("I\'d also like to purchase some chocolates as well.");
	console.log("Feel free to shop and you can exchange these when you check out.");
	console.log("I want to buy some other types of chocolate.");
	
	
//Answering questions on form//
	console.log("Can you three please feel out these customer inquiry forms?");
		if(form = true){
	console.log("Yes we can.")
		}else{
	console.log("I'm sorry, we don't have time. Maybe next time.");
	};		
		
	