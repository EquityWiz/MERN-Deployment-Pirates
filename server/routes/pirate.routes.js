const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get("/api/Pirates", PirateController.findAllPirates);
    app.get("/api/Pirates/:id", PirateController.findSinglePirate);
    app.post("/api/Pirates", PirateController.createNewPirate);
    app.put("/api/Pirates/update/:id", PirateController.updatePirate);
    app.delete("/api/Pirates/delete/:id", PirateController.deletePirate);
}
