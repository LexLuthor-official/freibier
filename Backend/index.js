const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./lib/database.js");
const errorHandling = require("./middleware/errorHandling.js");

dotenv.config();

database.init();

const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));

const articles = [
    {
        link: "article1",
        screenshot: "https://freibier-party.de/",
        title: "Bier",
        description: "lorem ipsum"
    },
    {
        link: "article2",
        screenshot: "http://www.biersekte.de/",
        title: "mehr Bier",
        description: "lorem ipsum"
    },
    {
        link: "article3",
        screenshot: "https://www.youtube.com/watch?v=l7DCHLaNWcA",
        title: "am biersten",
        description: "lorem ipsum"
    },
];

server.get("/articles", (req, res) => {
    res.send(articles);
});

server.use("/api/articles", articleRouter);
server.use("/api", (req, res) => res.status(404).send());

server.use(errorHandling);



