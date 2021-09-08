import express from 'express';
const articleRouter = express.Router();

import articleController from '../controller/articles.js';

articleRouter.get("/article?", articleController.read);
articleRouter.post("", articleController.create);

articleRouter.use("/articles", articleRouter);

export default articleRouter;