const express = require("express");
const accounts = require("./accounts");
const PORT = 8000;
const app = express();
app.use(express.json());

app.get("/accounts", (req, response) => {
  return response.status(200).json(accounts);
});

app.post("/accounts", (req, response) => {
  const newAccount = {
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds,
  };

  accounts.push(newAccount);

  return response.status(200).json(accounts);
});

app.delete("/accounts/:id", (req, response) => {
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
});

app.listen(PORT, () => {
  console.log(`conected${PORT} `);
});
