import express from 'express';
import articleController from '../controller/articles.js';

const articleRouter = express.Router();

articleRouter.get("/article", articleController.read);
articleRouter.post("/", articleController.create);

export default articleRouter;