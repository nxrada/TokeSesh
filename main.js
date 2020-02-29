var gameData = {
        tokes: 0,
        tokesRemaining: 64,
        tokesPerClick: 1,
        budPerClickCost: 10,
        debt: 0,
        debtAccumulationFactor: 1,
        budLeft: 0,
        joints: 0,
    }
//Declaration of gameData variables.

function takeAToke() {
        gameData.tokes ++;
        gameData.tokesRemaining --;
        document.getElementById("tokesTaken").innerHTML = "Tokes: " + gameData.tokes; 
}
//Function which runs on "Take a Toke" button click.

function rollOne() {
    gameData.joints++;
    gameData.budLeft--;
    document.getElementById("jointCounter").innerHTML = "J's rolled: " + gameData.joints;
    document.getElementById("budCount").innerHTML = "Bud left:" + gameData.budLeft + "g";
}
//Rolls a joint.

function buyBud() {
        gameData.budPerClick += 1;
        gameData.budPerClick *= 2;
        budLeft+= 28;
        debt+= 250;
        document.getElementById("debtCount").innerHTML = "Current debt: " + gameData.debt +"dollars";
        document.getElementById("budCount").innerHTML = "Bud left: " + gameData.budLeft + "grams";
}
//Buys an ounce of bud.

function debtAccumulation() {
    gameData.debt+= debtAccumulationFactor;
    document.getElementById("debtCount").innerHTML = "Current debt: $" + gameData.debt;
}
//Function in which you accumulate debt.

var debtLoop = window.setInterval(function() {
    debtAccumulation();
}, 10000)
//Debt loop.

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem('tokeSeshSave', JSON.stringify(gameData));
}, 15000)
//Savegame loop for saving the game


var savegame = JSON.parse(localStorage.getItem("tokeSeshSave"))
//Savegame variable.

if (savegame !== null) {
    gameData = savegame;
}
//If statement that loads savegame. 