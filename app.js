const express = require("express");
const accountsRouter = require("./api/acounts/routes");
const playersRouter = require("./api/plyers/routes");
const connectDb = require("./database");

const PORT = 8000;
const app = express();
app.use(express.json());
app.use("/api/acounts/", accountsRouter);
app.use("/api/players/", playersRouter);
connectDb();
app.listen(PORT, () => {
  console.log(`conected${PORT} `);
});
