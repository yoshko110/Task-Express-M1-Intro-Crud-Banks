const { model, Schema } = require("mongoose");
const PlayersSchema = new Schema({
  name: String,
  sword: String,
  age: Number,
});
module.exports = model("player", PlayersSchema);
