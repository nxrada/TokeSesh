var gameData = {
        tokes: 0,
        tokesPerClick: 1,
        tokeCounter: 0,
        debt: 0,
        budLeft: 1,
        joints: 0,
    }
//Declaration of gameData variables

function takeAToke() {
        gameData.tokes += gameData.tokesPerClick;
        document.getElementById("tokesTaken").innerHTML = "Tokes: " + gameData.tokes;
        gameData.tokeCounter ++;
        if (gameData.tokeCounter == 8){
            gameData.joints--;
            gameData.tokeCounter = 0;
            document.getElementById("jointCounter").innerHTML = "Joints: " + gameData.joints.toString();
        }
        //Decreases joints for every 8 ticks.
}
//Takes a toke.

function rollOne() {
    gameData.joints ++;
    gameData.budLeft --;
    document.getElementById("jointCounter").innerHTML = "Joints: " + gameData.joints.toString();
    document.getElementById("budCount").innerHTML = "Bud left: " + gameData.budLeft.toString() + " g";
}
//Rolls a joint.

function buyBud() {
        gameData.debt += 250;
        gameData.debt *= 2;
        gameData.budLeft += 28;
        document.getElementById("debtCount").innerHTML = "Current debt: $" + gameData.debt.toString();
        document.getElementById("budCount").innerHTML = "Bud left: " + gameData.budLeft.toString() + " g";
}
//Buys an ounce of bud.

function debtAccumulation() {
    gameData.debt+= debtAccumulationFactor;
    document.getElementById("debtCount").innerHTML = "Current debt: $" + gameData.debt.toString();
}
//Function by which you accumulate debt.

var debtLoop = window.setInterval(function() {
    debtAccumulation();
}, 10000)
//Debt loop.

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem('tokeSeshSave', JSON.stringify(gameData));
}, 15000)
//Savegame loop for saving the game

var buttonPermissionLoop = window.setInterval(function() {
    if (gameData.joints <= 0){
        document.getElementById("takeAToke").setAttribute("disabled","disabled");
    }
    //Diables the ability to take a toke if you have no joints.
    if (gameData.joints >= 1) {
        document.getElementById("takeAToke").removeAttribute("disabled");
    }
    if (gameData.budLeft <= 0){
        document.getElementById("rollOne").setAttribute("disabled","disabled");
    }
        //Disables the ability to roll if you have no bud.
    if (gameData.budLeft >= 1) {
        document.getElementById("rollOne").removeAttribute("disabled");
    }
}, 250)
//Loop which disables/enables buttons

function autoToker(){
    
}
var savegame = JSON.parse(localStorage.getItem("tokeSeshSave"))
//Savegame variable.