const mongoose = require("mongoose");
const C = require("../../constants");

// const ObjectId = mongoose.SchemaTypes.ObjectId;
const required = [true, C.FIELD_IS_REQ];

const goalSchema = mongoose.Schema(
  {
    text: { type: String, required },
  },
  { timestamps: true, versionKey: false }
);

const Goal = mongoose.model("Goal", goalSchema);
module.exports = Goal;
