import User from "../models/User.js";

export default {
    readAll: async function (req, res, next) {
        try {
            const users = await User.readAll();
            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    create: async function (req, res, next) {
        try {
            const result = await User.register(
                req.body.name,
                req.body.email,
            );
            res.json(result);
            next();
        } catch (error) {
            next(error);
        }
    }
};