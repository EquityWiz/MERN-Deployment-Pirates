const Pirate = require("../models/pirate.model");

// Find All 
module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err));
};
// Find Single Pirate
module.exports.findSinglePirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(singlePirate => res.json(singlePirate))
        .catch(err => res.json(err));
};
// Create a new Pirate
module.exports.createNewPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err));
};
// Update one Pirate
module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params.id},req.body,{new:true, runValidators: true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err));
}
// Delete one Pirate 
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err));
}
