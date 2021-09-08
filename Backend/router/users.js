// import express from "express";
// import usersController from "../controllers/users.js";
// import csrfProtection from "../middlewares/csrfProtection.js";

// const router = express.Router();

// router.post("/api/user", csrfProtection, usersController.create);
// router.get("/users", usersController.readAll);

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

// export default router;