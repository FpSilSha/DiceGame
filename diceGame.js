//A game revolving around different dice rolls.

//Takes an input as number of sides of a dice and "rolls".
let healthPool = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


function diceRoller(numberOfSides){
let result = Math.floor(Math.random() * numberOfSides)+1;
}

// Function to choose a value from an array at random.
function randomChoiceFromArray(arrayToRandomlyPickFrom){
	return arrayToRandomlyPickFrom[Math.floor(Math.random()*arrayToRandomlyPickFrom.length)];

}
// Health array to pull for random "opponent" health.
let monster = randomChoiceFromArray(healthPool)

