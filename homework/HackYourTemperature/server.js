const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/weather", (req, res) => {
  const cityName = {
    name: req.body.name,
    temperature: req.body.temperature,
  };
  res.json(`the temperature in ${cityName.name} is ${cityName.temperature}`);
});

app.get("/weather", (req, res) => {
  res.send("hello from backend to the frontend");
});

app.listen(PORT, () => {
  console.log(`this server running on port:${PORT}`);
});
