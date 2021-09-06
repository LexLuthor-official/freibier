import User from "../models/User.js";
import tokenHandler from "../lib/token.js";

export default {
    loginByEmail: async function (req, res, next) {
        try {
            const user = await User.loginByEmail(
                req.body.email,
                req.body.password
            );

            const token = tokenHandler.createToken(user);

            res.cookie("token", token, {
                maxAge: process.env.TOKEN_EXP * 1000,
                httpOnly: true,
            });

            res.json(user);
        } catch (error) {
            res.status(401).send();
            next(error);
        }
    },
}