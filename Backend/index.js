const express = require("express");
const cors = require("cors");

const server = express();
const app = server;

const PORT = 3030;
  
app.listen(PORT, () => {
console.log(`Example app listening at http://localhost:${PORT}`)
})

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

