const { model } = require("mongoose");

const { positionSchema } = require("../schemas/positionSchema.js");

const PositionModel = new model("position", positionSchema);

module.exports = { PositionModel };
