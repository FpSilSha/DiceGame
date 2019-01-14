// A game revolving around different dice rolls.
 
// Original Variables
// Health variables
let healthPoolSmall = [10, 40, 60, 100];
let healthPoolMedium = [150, 300, 450, 600];
let healthPoolLarge = [1000, 1500, 2000, 2500];
let monsterHealth = randomChoiceFromArray(healthPoolSmall)
// Damage Variables
let damageDealing = 1;

// Functions declared
// Takes an input as number of sides of a dice and "rolls".
function diceRoller(numberOfSides){
let result = Math.floor(Math.random() * numberOfSides)+1;
}

// Function to choose a value from an array at random.
function randomChoiceFromArray(arrayToRandomlyPickFrom){
	return arrayToRandomlyPickFrom[Math.floor(Math.random()*arrayToRandomlyPickFrom.length)];

}
// Health array to pull for random "opponent" health.

// Function to generate a new monster.
function generateNewMonster(){
	if (monsterHealth <=0){
		monsterHealth = randomChoiceFromArray(healthPoolSmall);
		alert("Monster defeated! New monster health at " + monsterHealth + "!");
		
	}
}

function attack(){
	monsterHealth = monsterHealth - damageDealing
	generateNewMonster
}