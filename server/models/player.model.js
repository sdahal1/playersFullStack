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
        type: Number,
        required:[true,"Points per game is needed to see if this player is nice or nah"],
        min: [1,"Player must get at least one bucket to qualify"],
        max: [50, "This players too nice for this demo"]
    }
})

const Player = mongoose.model("Player", PlayerSchema)

module.exports = Player;




