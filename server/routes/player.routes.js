//api endpoints in this file. similar to urls.py
// from . import views
const PlayerController = require("../controllers/player.controller");


// path("/api/players", views.index)

module.exports = app => {
    app.get("/api/players", PlayerController.findAllPlayers);
    app.post("/api/players/create", PlayerController.draftNewPlayer);
    app.get("/api/players/:playerId", PlayerController.findOnePlayer);
    app.put("/api/players/update/:playerId", PlayerController.updatePlayer);
    app.delete("/api/players/destroy/:playerId", PlayerController.deletePlayer);

}



