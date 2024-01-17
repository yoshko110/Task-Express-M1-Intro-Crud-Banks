const express = require("express");
const { getAllAcounts, addAcount, deleteAcount } = require("./controlars");
const router = express.Router();

router.get("/", getAllAcounts);

router.post("/", addAcount);

router.delete("/:id", deleteAcount);

module.exports = router;
