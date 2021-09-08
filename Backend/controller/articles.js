import articleModel from '../model/article.js';

export default {
    read: async (req, res, next) => {
        try {
            const response = await articleModel.readAll();
            if (!response) return res.status(404).send();
            res.json(response);

        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const newEvent = await articleModel.create({
                link: req.body.link,
                title: req.body.title,
                screenshot: req.body.screenshot,
                description: req.body.description,
            });
            res.json({ newEvent });
        
        } catch (error) {
            next(error);           
        }
    }
};
