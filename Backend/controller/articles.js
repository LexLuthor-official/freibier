const articleModel = require("../model/article.js");

module.exports = {
    read: async (req, res, next) => {
        try {
            const response = req.params.eventId ? await articleModel.readOne(req.params.eventId) : await articleModel.readAll();
            if (!response) return res.status(404).send();
            res.json(response);

        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const newEvent = await articleModel.create({
                title: req.body.title,
                date: req.body.date,
                maxNumberGuests: req.body.maxNumberGuests,
            });
            res.json({ newEvent });
        
        } catch (error) {
            console.log("ERRORERROR", error.errors.date.name);
            if (error.errors.date.name === "CastError") return res.status(400).send("Please insert ...");  
            next(error);           
        }
    },

    update: async (req, res, next) => {
        try {
            const response = await articleModel.update(req.params.eventId, {
                title: req.body.title,
                date: req.body.date,
                maxNumberGuests: req.body.maxNumberGuests,
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
            console.log("Bin da wer noch? 204");
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};
