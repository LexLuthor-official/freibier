import express from 'express';
const articleRouter = express.Router();

import articleController from '../controller/articles.js';

articleRouter.get("/article?", /*validate(articleSchema.GET),*/ articleController.read);
articleRouter.post("/", /*validate(articleSchema.POST),*/ articleController.create);
articleRouter.patch("/article", /*validate(articleSchema.PATCH),*/ articleController.update);
articleRouter.delete("/article", /*validate(articleSchema.DELETE),*/ articleController.delete);

articleRouter.use("/articles", articleRouter);

export default articleRouter;