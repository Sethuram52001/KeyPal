const express = require("express");
const { chats } = require("./data/data");
const app = express();

require('dotenv').config();

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.get("/api/chat", (req, res) => {    
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const chat = chats.find(chat => chat.id === req.params.id);
    res.send(chat);
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port 5000`);
});