const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const atlanteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlenght: 2,
        maxlenght: 20,
    },
    skills: {
        strength: { type: Number, required: true, min: 0, max: 10, default: 5 },
        speed: { type: Number, required: true, min: 0, max: 10, default: 5 },
        stamina: { type: Number, required: true, min: 0, max: 10, default: 5 },
        agility: { type: Number, required: true, min: 0, max: 10, default: 5 },
        fighting: { type: Number, required: true, min: 0, max: 10, default: 5 },
        intelligence: {
            type: Number,
            required: true,
            min: 0,
            max: 10,
            default: 5,
        },
    },
    accessory: {
        type: String,
        required: true,
    },
});

// Apply the uniqueValidator plugin to atlanteSchema
atlanteSchema.plugin(uniqueValidator);

module.exports = mongoose.model("atlante", atlanteSchema);
