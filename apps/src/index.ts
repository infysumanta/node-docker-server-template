import dotenv from "dotenv";
import express from "express";
import redis from "redis";

const app = express();

const PORT = process.env.PORT || 3000;

const redisUrl = `redis://redis:6379`;

let redisClient: any;

// redis client setup for caching data
(async () => {
  redisClient = await redis
    .createClient({
      url: "redis://redis:6379",
    })
    .on("error", (err) => {
      console.log("Redis Client Error", err);
    })
    .connect();
})();

// redis client error handling

app.get("/", async (req, res) => {
  await redisClient.set("key", "value");
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
