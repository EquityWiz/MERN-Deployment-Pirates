const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate name is required."]
        },
    imageUrl : {
        type: String,
        required: [true, "Image URL is required"]
    },
    chest: {
        type: Number,
        required: [true, "Number of chest is required"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Catchphrase required"]
    },
    crewPosition: {
        type: String,
        required: [true, "Crew Position Required"]
    },
    pegLeg: {
        type: Boolean
    },
    eyePatch: {
        type: Boolean
    },
    hookHand: {
        type: Boolean
    }}, {timestamps: true}
    );

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;
