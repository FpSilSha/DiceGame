// A game revolving around different dice rolls.
 
// Original Variables
// Health variables
let healthPoolSmall = [10, 40, 60, 100];
let healthPoolMedium = [150, 300, 450, 600];
let healthPoolLarge = [1000, 1500, 2000, 2500];
let monsterHealth = randomChoiceFromArray(healthPoolSmall);
let damageVersusMonsterHealth = [healthPoolSmall, healthPoolMedium, healthPoolLarge];
// Damage Variables
let damageLevelUpgrades = [1, 5, 10, 25, 50, 75, 100, 150, 200];
let i = 0;
//////////let damageDealingLevel = damageLevelUpgrades[i]; Do I need this? Will see if seperately storing this matters later
let damage = diceRoller(damageLevelUpgrades[i]);
//Misc Variables
let shopPrice = [100, 250, 600, 1000, 1450, 2000, 3000, 5000];
let cash = 0;
let upgradeCost = shopPrice[i];
// Functions declared
alert("A monster claws it's way towards you with "+ monsterHealth+" hp");
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
	

// Function for health changes. Deals damage to monsters.


function attack(){
	monsterHealth -= damage;
}

// Checks health to report value to user or initialize a new monster.
function healthCheck(){
	if (monsterHealth <=0){

		generateNewMonster(damageVersusMonsterHealth[0]);
		
		document.getElementById("outputBox").innerHTML = ("A new monster spawns with " +monsterHealth+" hp!");
}
	else{
		document.getElementById("outputBox").innerHTML = ("The monster is at " + monsterHealth + " hp, keep going!");
	}

}
// Function that handles adding money earned from attacking into a capture variable.
function lootDrop(){
cash += damage;
	document.getElementById("bank").innerHTML =("Cash Monies value: "+cash+" CM");
}
// Function made to coincide with an upgrade button. Gives appropiate responses
// for upgrade attempts, while also incrementing 'i' under correct conditions.
function upgradeDamage(){
if (cash >= upgradeCost && i<=damageLevelUpgrades.length){
	i++
	alert("Your power grows...and yet you crave MORE...");
}
	else if (cash >= upgradeCost && i === damageLevelUpgrades.length){
		alert("Your power level is already off the charts! WE CAN'T GO HIGHER!");
	}
	else (cash < upgradeCost){
		alert("Maybe I need to increase the text size if you think you have enough CM");

	}

// The functions that runs the main constraints of the game to actually "play" it.
function clickActions(){
	attack();
	healthCheck();
	lootDrop();
	
}

