// import express from "express";
// import authenticationController from "../controllers/authentication.js";
// import csrfProtection from "../middlewares/csrfProtection.js";

// const router = express.Router();

// // noch ohne Middleware
// router.post("/", csrfProtection, authenticationController.loginByEmail);

// // GUIs
// router.get("/form/login", csrfProtection, function (req, res) {
// 	res.render(
// 		'login', // <- verweist auf entsprechende Datei unter ./views/
// 		{ // in dieser Datei sind die folgenden Variablen verfügbar:
// 			HTTP_METHOD: "POST", 
// 			HTTP_PATH: "/authentication", 
// 			csrfToken: req.csrfToken() 
// 		}
// 	)
// })

// export default router;