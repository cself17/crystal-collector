//PSEUDOCODE
//Game has four crystals represented as images
//Each crystal is secretly assigned a random number from one to twelve
//When a new game starts, the crystals will be assigned a new random number
//When a new game starts, a random number called "total score" will be generated
//When a new game starts, a score called "previous" will be assigned the value of zero
//When a crystal is clicked, the random number assigned to it adds to a score called "previous"
//If player points equals points needed the player wins the game
//If player points exceeds points needed the player loses the game
//If the player wins the game, a win counter will go up by one
//If the player loses the game, a lose counter will go up by one 

var randomResult;
var lose = 0;
var win = 0;
var points = 0;
//saves variables as undefined

var resetAndStart = function () {
	//restarts the game

	$(".crystals").empty();
	//empties all the crystal classes of their numbers from last game

	var images = [
		"https://cdn.pixabay.com/photo/2014/04/02/16/26/crystal-307264_960_720.png",
		"https://cdn.pixabay.com/photo/2014/04/02/16/26/crystal-307265_960_720.png",
		"https://cdn.pixabay.com/photo/2014/04/02/16/26/crystal-307263_960_720.png",
		"https://orig00.deviantart.net/001e/f/2014/352/0/e/crystal_icon_by_kingjnl74-d8a98ay.png"];
	//images saved as an array in an images variable

	randomResult = Math.floor(Math.random() * 70) + 30;
	//selects a random number from zero to seventy and then adds thirty
	//this is the exact amount of points the player needs

	$("#result").html("Points Needed: " + randomResult);
	//selects an id with "result" and writes Random Results in html so that the player can see the exact points needed

	for (var i = 0; i < 4; i++) {
		//creates a for loop that loops four times, so the code below happens four times

		var random = Math.floor(Math.random() * 11) + 1;
		//creates a random number from zero to eleven and then adds one
		//console.log(random);

		var crystal = $("<div>");
		//a variable called crystal is equal to a div element in html
		//console.log(crystal);

		crystal.attr({
			"class": 'crystal',
			//crystal variable is assigned to a class called crystal
			"data-random": random
			//assigns the random variable to the crystal to give the crystal a random number
		});

		crystal.css({
			"background-image": "url('" + images[i] + "')",
			//allows the images from the variable images array to be used in the function
			"background-size": "cover",
			//uses css to make the crystal images fit better and look better in their designated divs
		})

		//crystal.html(random);
		////writes html crystals number value in the all crystal boxes.  you don't want the player to see this

		$(".crystals").append(crystal);
		//physically creates the crystal variable as a div in the crystals div so that it can be seen
	}
	//this entire function makes four var crystal divs within the crystals div

	$("#points").html("Points: " + points);
	//Keeps track of the number of points the player accumulates
}

resetAndStart();
//runs the resetAndRestart function that is above

$(document).on('click', ".crystal", function () {
	//when a crystal class is clicked, run the following code as a function

	var num = parseInt($(this).attr('data-random'));
	//variable num equals a string converted to a number by using "parseInt"
	//"this" refers to ".crystal" and then selects "data-random" class
	//the "data-random" refers to "random" which is a variable that gets random number

	points += num;
	//points is set equal to num (I think, not completely sure).  I just know that num and previous are the same now
	$("#points").html("Points: " + points);
	//selects the "points" id in the html and writes the "points" variable number into html
	//console.log(points);

	if (points > randomResult) {
		lose++;
		//if "points" is greater than "randomResult" then the loss counter is increased
		//console.log("You lost!");
		$("#loser").html("Losses: " + lose);
		//selects all id's with "loss" and writes loss html
		points = 0;
		//sets points back to zero
		resetAndStart();
		//resets and starts the game

	}
	else if (points === randomResult) {
		win++;
		//if "points" is equal to "randomResult" then the win counter is increased
		//console.log("You win!");
		$("#winner").html("Wins: " + win);
		//selects all id's with "win" and writes win html  
		points = 0;
		//sets points back to zero
		resetAndStart();
		//resets and restarts the game
	}

});