"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const redisUrl = `redis://localhost:6379`;
// redis client setup for caching data
const redisClient = (0, redis_1.createClient)({ url: redisUrl });
// redis client error handling
redisClient.on("error", (err) => {
    console.log("Error " + err);
});
app.get("/", async (req, res) => {
    await redisClient.set("key", "value");
    const value = await redisClient.get("key");
    console.log(value);
    res.send("Hello World!" + value);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
