var gameData = {
        tokes: 0,
        tokesPerClick: 1,
        tokeCounter: 0,
        wealth: 0,
        budLeft: 1,
        joints: 0,
        shiftsRemaining: 60,
        salary: 15,
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
]
const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
var isEmployed = false;

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
        const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
        document.getElementById("jobTitle").innerHTML = randomJobTitle;
        shiftsRemaining += (60 * 2)
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
}, 250)
//--------------------------------------LOOP THAT DOES BUTTON PERMISSIONS--------------------------------------


function autoToker(){  
    takeAToke();
}
//--------------------------------------WORK IN PROGRESS AUTO-TOKER LOOP--------------------------------------


var savegame = JSON.parse(localStorage.getItem("tokeSeshSave"))
//--------------------------------------SAVEGAME VARIABLE--------------------------------------

