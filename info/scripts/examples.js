/**
 * This method takes no arguments and returns if the index it arrived at was from 0 to 3.
 */
function randomOutput() {
	//	Math.random() returns a number from 0 to 1.0.
	//	Math.floor() takes a single argument and ensures that that is it a whole number.
	var index = Math.floor(Math.random() * Math.floor(3))

	var returnValue = "I didn't hit anything."

	switch(index) {
		case 0:
			returnValue = "I hit the index of 0."
			break;
		case 1:
			returnValue = "I hit the index of 1."
			break;
		case 2:
			returnValue = "I hit the index of 2."
			break;
		case 3:
			returnValue = "I hit the index of 3."
			break;
	}

	return returnValue;
}

//	var -> This is a variable.
//	health -> The name of this variable that we want to reference it by.
var health = 10;

/**
 * Adjust the health variable and print the value to the health element in the invoking HTML.
 * @param {*} value Integer value of how much we want to adjust by. 
 */
function adjustHealth(value) {
	health += value;
	if (health < 0)
		health = 0;

	document.getElementById('health').innerHTML = printHealth()
}

/**
 * The text we want to display inside the HTML.
 */
function printHealth() {
	if (health > 0)
		return "Health: " + health;
	else
		return "Health: Dead"
}