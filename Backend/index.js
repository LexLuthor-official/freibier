import dotenv from "dotenv";
dotenv.config();

import express from "express";
const server = express();

import db from "./lib/database.js";
import mongodb from "mongodb";
const { ObjectId } = mongodb;


server.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/users", async (req, res) => {
    const users = await db.collection("users").find().project({ email: false }).toArray();
    res.json(users);
});

server.get("/users/:userId", async (req, res) => {
    const user = await db.collection("users").findOne({ _id: ObjectId(req.params.userId) });
    res.json(user);
});


server.get("/articles", async (req, res) => {
    const articles = await db.collection("articles").find().toArray();
    res.json(articles);
});

server.get("/articles/:articleId", async (req, res) => {
    const article = await db.collection("articles").findOne({
        _id: ObjectId(req.params.articleId),
    });
    res.json(article);
});


server.get("/users/:userId/readinglist", async (req, res) => {
    const articles = await db.collection("users").aggregate([
        {
            $match: {
                _id: ObjectId(req.params.userId),
            },
        },
        {
            $lookup: {
                from: "articles",
                localField: "readinglist",
                foreignField: "_id",
                as: "articles",
            }
        },
    ]).toArray();
    res.json(articles);
});


server.post("/users", async (req, res) => {
    const result = await db.collection("users").insertOne({
        name: req.body.name,
        email: req.body.email,
    });
    res.json(result);
});

server.put("/users/:userId", async (req, res) => {
    const result = await db.collection("users").updateOne({
        _id: ObjectId(req.params.userId),
    },
    {
        $set: {
            name: req.body.name,
            readinglist: req.body.readinglist,
        },
    });
    res.json(result);
});

server.delete("/users/:userId", async (req, res) => {
    const result = await db.collection("users").deleteOne({
        _id: ObjectId(req.params.userId),
    });
    res.json(result);
});



