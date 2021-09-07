import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//import init from './lib/database.js';
//init();
import errorHandling from './middleware/errorHandling.js';
import articleRouter from './router/articles.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import articles from './controller/articles.js';
dotenv.config();


mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err?console.log(err):console.log("MongoDB infected..."));
});


const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static('images'))

// const articles = [
//     {
//         link: "article1",
//         screenshot: "https://freibier-party.de/",
//         title: "Bier",
//         description: "lorem ipsum"
//     },
//     {
//         link: "article2",
//         screenshot: "http://www.biersekte.de/",
//         title: "mehr Bier",
//         description: "lorem ipsum"
//     },
//     {
//         link: "article3",
//         screenshot: "https://www.youtube.com/watch?v=l7DCHLaNWcA",
//         title: "am biersten",
//         description: "lorem ipsum"
//     },
// ];

server.get("/articles", (req, res) => {
    res.send();
});

server.use("/api/articles", articleRouter), (req, res)=> res.status(200).send("article", articles);
server.use("/api", (req, res) => res.status(404).send("404"));

server.use(errorHandling);

