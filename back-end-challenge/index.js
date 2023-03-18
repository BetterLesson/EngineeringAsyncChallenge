const express = require("express");
const app = express();
const port = 8000; // can change to whatever you want

app.use(express.json());

const MOCK_DB = [];

app.post("/reservation", (req, res) => {
  res.json(req.body);
});

app.get("/reservation", (req, res) => {
  res.send("Express + TS server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
