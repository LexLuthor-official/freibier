const express = require("express");
const router = express.Router();

const articleRouter = require("../router/articles.js");

const articleController = require("../controller/articles.js");

//const articleSchema = require("../schema/article.json");

router.get("/article?", /*validate(articleSchema.GET),*/ articleController.read);
router.post("/", /*validate(articleSchema.POST),*/ articleController.create);
router.patch("/article", /*validate(articleSchema.PATCH),*/ articleController.update);
router.delete("/article", /*validate(articleSchema.DELETE),*/ articleController.delete);

router.use("/articles", articleRouter);

module.exports = router;