var gameData = {
        tokes: 0,
        tokesPerClick: 1,
        tokeCounter: 0,
        wealth: 0,
        budLeft: 1,
        joints: 0,
        shiftsRemaining: 10,
        salary: 8,
        autoTokeCount: 0, 
        autoTokeCost: 4,
        promotionTracker: 0,
}
//--------------------------------------DECLARATION OF GAMEDATA VARIABLES--------------------------------------

var jobTitles = [
    "Town idiot",
    "Town janitor",
    "Town jester",
    "Town cum-cleaner",
    "Town retard",
    "Town whore",
    "Town chieftan",
    "Town abortionist",
    "Town guard",
    "Head of the Guard",
    "Royal idiot",
    "Royal whore",
    "Royal jester",
    "Royal janitor",
    "His Royal Heighness, Nick",
    "Royal abortionist",
    "Royal cumbucket cleaner",
    "the 'Queen'",
    "BIG TOKE",
    "Cumwizard",
    "shitty artist",
    "welfare queen",
    "baby killer",
    "pothead",
    "child molestor (bad!)",
    "catholic priest",
    "slave",
    "cum",
    "Local peasant",
    "Presidential candidate",
    "yeast",

]
const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
var isEmployed = false;
//--------------------------------------VARIABLES RELATING TO JOB TITLES, ETC-------------------------------------
function takeAToke() {
        gameData.tokes += gameData.tokesPerClick;
        document.getElementById("tokesTaken").innerHTML = gameData.tokes;
        gameData.tokeCounter ++;
        if (gameData.tokeCounter == 8){
            gameData.joints--;
            gameData.tokeCounter = 0;
            document.getElementById("jointCounter").innerHTML = gameData.joints.toString();
        }
        //Decreases joints for every 8 ticks.
}
//--------------------------------------FUNCTION THAT TAKES A TOKE-------------------------------------


function rollOne() {
    gameData.joints ++;
    gameData.budLeft --;
    document.getElementById("jointCounter").innerHTML = gameData.joints.toString();
    document.getElementById("budCount").innerHTML = gameData.budLeft.toString();
}
//--------------------------------------LOOP THAT DOES BUTTON PERMISSIONS--------------------------------------

function workShift() {
    gameData.wealth += gameData.salary;
    gameData.shiftsRemaining --;
    if (gameData.shiftsRemaining == 0) {
        gameData.promotionTracker ++; 
        const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
        document.getElementById("jobTitle").innerHTML = randomJobTitle;
        gameData.shiftsRemaining = (10 + gameData.promotionTracker);
        document.getElementById("shiftsRemaining").innerHTML = gameData.shiftsRemaining.toString();
    }
    document.getElementById("currentWealth").innerHTML = gameData.wealth.toString();
    document.getElementById("shiftsRemaining").innerHTML = gameData.shiftsRemaining.toString();
}
//--------------------------------------FUNCTION THAT WORKS A SHIFT--------------------------------------

function findJob() {
    isEmployed = true;
    document.getElementById("jobTitle").innerHTML = randomJobTitle;
}
//--------------------------------------FUNCTION THAT FINDS A JOB--------------------------------------

function buyBud() {
    if (gameData.wealth >= 40){
        gameData.wealth -= 40;   
        gameData.budLeft += 3.5;
        document.getElementById("currentWealth").innerHTML = gameData.wealth.toString();
    }
    document.getElementById("budCount").innerHTML = gameData.budLeft.toString();
}
//--------------------------------------FUNCTION THAT BUYS AN EIGHTH--------------------------------------

function buyAutoToker() {
    if (gameData.joints >= gameData.autoTokeCost){
        gameData.joints -= gameData.autoTokeCost;   
        gameData.autoTokeCount += 1;
        document.getElementById("jointCounter").innerHTML = gameData.joints.toString();
        gameData.autoTokeCost += 2;
        document.getElementById("autoTokeCost").innerHTML = gameData.autoTokeCost.toString();
    }
    document.getElementById("autoTokeCount").innerHTML = gameData.autoTokeCount.toString();
}
//--------------------------------------FUNCTION THAT BUYS AN AUTO-TOKER--------------------------------------

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem('tokeSeshSave', JSON.stringify(gameData));
}, 15000)
//--------------------------------------SAVEGAME LOOP FUNCTION--------------------------------------


var buttonPermissionLoop = window.setInterval(function() {
    if (gameData.joints < 1){
        document.getElementById("takeAToke").setAttribute("disabled","disabled");
    }
    if (gameData.joints >= 1) {
        document.getElementById("takeAToke").removeAttribute("disabled");
    }
    if (gameData.budLeft < 1){
        document.getElementById("rollOne").setAttribute("disabled","disabled");
    }
    if (gameData.budLeft >= 1) {
        document.getElementById("rollOne").removeAttribute("disabled");
    }
    if (gameData.wealth < 40) {
        document.getElementById("buyBud").setAttribute("disabled","disabled");
    }
    if (gameData.wealth >= 40) {
        document.getElementById("buyBud").removeAttribute("disabled");
    }
    if (isEmployed == false) {
        document.getElementById("workShift").setAttribute("disabled","disabled");
        document.getElementById("findJob").removeAttribute("disabled");
    }
    if (isEmployed == true) {
        document.getElementById("workShift").removeAttribute("disabled");
        document.getElementById("findJob").setAttribute("disabled","disabled");
    }
    if (gameData.joints < gameData.autoTokeCost){
        document.getElementById("buyAutoToke").setAttribute("disabled","disabled");
    }
    else {
        document.getElementById("buyAutoToke").removeAttribute("disabled");
    }
}, 250)
//--------------------------------------LOOP THAT DOES BUTTON PERMISSIONS--------------------------------------

var victoryCheckLoop = window.setInterval(function() {
    if (gameData.tokes >= 42069) {
        document.getElementById("buyAutoToke").setAttribute("disabled", "disabled");
        document.getElementById("takeAToke").setAttribute("disabled", "disabled");
        document.getElementById("rollOne").setAttribute("disabled", "disabled");
        document.getElementById("buyBud").setAttribute("disabled", "disabled");
        document.getElementById("workShift").setAttribute("disabled", "disabled");
        document.getElementById("victoryBanner").innerHTML = "VICTORY: 42069 TOKES ACHIEVED (YOU OVERDOSED ON THC...)";
        gameData.tokes = 0;
        gameData.tokesPerClick = 0;
        gameData.tokeCounter = 0;
        gameData.wealth = 0;
        gameData.budLeft = 0;
        gameData.joints = 0;
        gameData.shiftsRemaining = -1;
        gameData.salary = 8;
        gameData.autoTokeCount = 0;
        gameData.autoTokeCost = 0;
        gameData.promotionTracker = 0;
    }
},500)

var autoTokeLoop = window.setInterval(function() {
    gameData.tokes += (1 * gameData.autoTokeCount);
    document.getElementById("tokesTaken").innerHTML = gameData.tokes;
}, 500)
//--------------------------------------AUTO-TOKER LOOP--------------------------------------


var savegame = JSON.parse(localStorage.getItem("tokeSeshSave"))
//--------------------------------------SAVEGAME VARIABLE--------------------------------------
