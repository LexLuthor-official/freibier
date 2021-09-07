import express from "express";
import usersController from "../controllers/users.js";
import csrfProtection from "../middlewares/csrfProtection.js";
import authenticationController from '../controller/authentication.js';

const router = express.Router();

router.post("/", csrfProtection, usersController.create);
router.get("/", usersController.readAll);
// //router.delete("/:userId", usersController.delete);

// // GUI Routes
// router.get('/form/create', csrfProtection, function (req, res) {
// 	res.render(
// 		'createUser',
// 		{
// 			HTTP_METHOD: "POST", 
// 			HTTP_PATH: "/users", 
// 			csrfToken: req.csrfToken() 
// 		}
// 	)
// })

export default router;