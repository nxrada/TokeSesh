var gameData = {
    tokes: 0,
    tokesPerClick: 1,
    budPerClickCost: 10,
    dinero: 0,
    }
    
    function takeAToke() {
    gameData.stone += gameData.budPerClickCost
    document.getElementById("tokesTaken").innerHTML = gameData.tokes + " Tokes"
    }
    
    function buyBudPerClick() {
    if (gameData.tokes >= gameData.budPerClickCost) {
    gameData.tokes -= gameData.budPerClickCost
    gameData.budPerClick += 1
    gameData.budPerClick *= 2
    document.getElementById("budCostTracker").innerHTML = "(Currently Level " + gameData.tokesPerClick +"; Cost: $" + gameData.budPerClickCost + ")"
    }
    }
    
    var mainGameLoop = window.setInterval(function() {
    mineStone()
    }, 1000)
    
    var saveGameLoop = window.setInterval(function() {
    localStorage.setItem('tokeSeshSave', JSON.stringify(gameData))
    }, 15000)
    
    var savegame = JSON.parse(localStorage.getItem("tokeSeshSave"))
    if (savegame !== null) {
    gameData = savegame
    }