import express from "express";
import fetch from "node-fetch";
import keys from "./sources/keys.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from backend to the frontend");
});

app.post("/weather", async (req, res) => {
  try {
    const cityName = req.body.cityName;
    if (cityName) {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 404) {
        res.sendStatus(404);
      } else {
        res.send(
          `the temperature in ${cityName} is ${Math.floor(data.main.temp)}º`
        );
      }
    } else {
      res.send({ msg: "CityName is not found !!" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default app;
