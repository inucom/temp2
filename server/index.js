
const express = require("express");
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, "../client/build/")));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/post", require("./Router/Post"));

app.listen(port, () => {
    mongoose.connect(
        "enter your mongodb url"
    ).then(() => {
        console.log(`http://localhost:${port}`);
        console.log("connecting MongoDB...");
    }).catch((err) => {
        console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

