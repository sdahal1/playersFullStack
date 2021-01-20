const { Decimal128 } = require("bson")
const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [2, "First name must be at least two characters"]


    },
    lastName: {
        type: String,
        required: [true, "Last Name is required!"]

    },
    ppG: {
        type: Decimal128,
        required:[true,"Points per game is needed to see if this player is nice or nah"]
    }
})

const Player = mongoose.model("Player", PlayerSchema)

module.exports = Player;




