const accounts = require("../../accounts");

const getAllAcounts = async (req, response) => {
  const allPlayer = await Player.find();

  return response.status(200).json(allPlayer);
};
const addAcount = (req, response) => {
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };

  accounts.push(newAccount);

  return response.status(200).json(accounts);
};
const deleteAcount = (req, response) => {
  const id = req.params.id;

  const foundAcount = accounts.find((account) => {
    return account.id == id;
  });
  if (!foundAcount) {
    return response.status(404).json("acount not found");
  }
  const filteredAcount = accounts.filter((acount) => {
    return acount.id != foundAcount.id;
  });
  return response.status(200).json(filteredAcount);
};

const updeteAcount = (req, res) => {
  const { id } = res.params;
  const { username, funds } = res.body;
  if (!id) return res.status(404).json(`msg:id is not find ${id}`);
};
module.exports = { getAllAcounts, addAcount, deleteAcount };
