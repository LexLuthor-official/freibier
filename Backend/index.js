import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandling from './middleware/errorHandling.js';
import articleRouter from './router/articles.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import read from './controller/articles.js';
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


// server.use("/",(req, res, next)=>{
//     console.log('----------------------------- SERVER')
//     console.log('---- params\n',req.params);
//     //console.log('---- headers\n', req.headers);
//     console.log('---- body\n', req.body);
//     //console.log('---- files\n', req.files);
//     console.log('-----------------------------\n');
//     next();
//     }); 

server.get("/article", articleRouter);



server.use("/api/articles", articleRouter);
server.use("/api", (req, res) => res.status(404).send("404"));

server.use(errorHandling);
