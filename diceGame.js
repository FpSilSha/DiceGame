// A game revolving around different dice rolls.
 
// Original Variables
// Health variables
let healthPoolSmall = [10, 40, 60, 100];
let healthPoolMedium = [150, 300, 450, 600];
let healthPoolLarge = [1000, 1500, 2000, 2500];
let monsterHealth = randomChoiceFromArray(healthPoolSmall);
let damageVersusMonsterHealth = [healthPoolSmall, healthPoolMedium, healthPoolLarge]
// Damage Variables
let damageLevelUpgrades = [1, 5, 10, 25, 50, 75, 100, 150, 200]
let damageDealingLevel = 1;
let damage = diceRoller(damageDealingLevel)
//Misc Variables
let cash = 0;
// Functions declared
// Takes an input as number of sides of a dice and "rolls".
function diceRoller(numberOfSides){
let result = Math.floor(Math.random() * numberOfSides)+1;
 return result;
}

// Function to choose a value from an array at random.
function randomChoiceFromArray(arrayToRandomlyPickFrom){
	return arrayToRandomlyPickFrom[Math.floor(Math.random()*arrayToRandomlyPickFrom.length)];

}
// Health array to pull for random monster health.

// Function to generate a new monster.
function generateNewMonster(healthPool){
	
		monsterHealth = randomChoiceFromArray(healthPool);
}		
	

// Function for health changes. Both deals damage and calls for replacement monster.


function attack(){
	monsterHealth -= damage;
}

function healthCheck(){
	if (monsterHealth <=0){

		generateNewMonster(damageVersusMonsterHealth[0]);
		alert("Monster defeated! New monster health at " + monsterHealth + "!");
		console.log("The monster spawns with" +monsterHealth+" hp!")
}
	else{
		console.log("The monster is at " + monsterHealth + " hp, keep going!")
	}

}

function lootDrop(){
cash += damage
console.log("You now have " + cash + " cash monies!")
}

function clickActions(){
	attack()
	healthCheck()
	lootDrop()
	
}

