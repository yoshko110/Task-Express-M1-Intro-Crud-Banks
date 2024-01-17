const express = require("express");
const router = express.Router();
const {
  getAllPlayers,
  addNewPlayer,
  updateNewPlayer,
  deletePlayer,
} = require("./controlars");
router.get("/", getAllPlayers);
router.post("/", addNewPlayer);
router.delete("/:_id", deletePlayer);
router.put("/:_id", updateNewPlayer);

module.exports = router;
