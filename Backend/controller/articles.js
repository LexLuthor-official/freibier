const articleModel = require("../model/article.js");

module.exports = {
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
    },

    update: async (req, res, next) => {
        try {
            const response = await articleModel.update(req.params.eventId, {
                link: req.body.link,
                title: req.body.title,
                screenshot: req.body.screenshot,
                description: req.body.description,
            });

            res.json(response);
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        console.log("delete");
        try {
            await articleModel.deleteById(req.params.eventId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};
