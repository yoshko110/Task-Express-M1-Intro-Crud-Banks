const Player = require("../../model/Player");

const getAllPlayers = async (req, response) => {
  const allPlayer = await Player.find();

  return response.status(200).json(allPlayer);
};
const addNewPlayer = async (req, res) => {
  try {
    const players = await Player.create(req.body);
    res.status(201).json(players);
  } catch (error) {
    console.log(error);
    res.status(500).json("server error");
  }
};

const updateNewPlayer = async (req, res) => {
  try {
    const { _id } = req.params;
    await Player.findByIdAndUpdate(_id, req.body);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json("server error");
  }
};
const deletePlayer = async (req, res) => {
  try {
    const { _id } = req.params;

    await Player.findByIdAndDelete(_id);
    console.log("done");
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    return res.status().json("server is error");
  }
};

module.exports = { getAllPlayers, addNewPlayer, updateNewPlayer, deletePlayer };
