var gameData = {
    tokes: 0,
    tokesPerClick: 1,
    budPerClickCost: 10,
    debt: 0,
    debtAccumulationFactor: 1,
    }
    
    function takeAToke() {
    gameData.tokes += 1
    document.getElementById("tokesTaken").innerHTML = "Tokes: " + gameData.tokes 
    }
    
    function buyBudPerClick() {
    if (gameData.dinero >= gameData.budPerClickCost) {
    gameData.tokes -= gameData.budPerClickCost
    gameData.budPerClick += 1
    gameData.budPerClick *= 2
    document.getElementById("budCostTracker").innerHTML = "(Currently " + gameData.tokesPerClick + "grams; Cost: $" + gameData.budPerClickCost + ")"
    }
    }
   
    function debtAccumulation() {
        gameData.debt ++
        document.getElementById("debtCount").innerHTML = "Current debt: $" + gameData.debt
    }
    var debtLoop = window.setInterval(function() {
        debtAccumulation()
        }, 10000)
    
    
    var saveGameLoop = window.setInterval(function() {
    localStorage.setItem('tokeSeshSave', JSON.stringify(gameData))
    }, 15000)
    
    var savegame = JSON.parse(localStorage.getItem("tokeSeshSave"))
    if (savegame !== null) {
    gameData = savegame
    }