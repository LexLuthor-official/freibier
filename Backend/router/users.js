import express from "express";
import usersController from "../controllers/users.js";
import csrfProtection from "../middlewares/csrfProtection.js";
import sendVerificationEmail from "../middlewares/sendVerificationEmail.js";

const router = express.Router();

// User
router.post("/", csrfProtection, usersController.create, sendVerificationEmail);
router.get("/", usersController.readAll);
router.get("/:userId", usersController.readOne);
router.put("/:userId", usersController.update);
router.delete("/:userId", usersController.delete);

// Reading List des Users
router.post("/:userId/readinglist", usersController.addArticleToReadingList);
router.patch("/:userId/readinglist/:articleId", usersController.markArticleAsRead);

// GUI Routes
router.get('/form/create', csrfProtection, function (req, res) {
	//res.render(HANDLEBARS_FILE, OBJEKT_MIT_IM_HANDLEBARS_FILE_VERFUEGBAREN_EIGENSCHAFTEN) 
	res.render(
		'createUser', // => verweist auf entsprechende `.handlebars`-Datei im ./views/ Ordner
		{ // Config-Objekt für das Handlebars-File
			HTTP_METHOD: "POST", 
			HTTP_PATH: "/users", 
			csrfToken: req.csrfToken() 
		}
	)
	          //^ verweist auf ./views/createUserForm.handlebars
})

export default router;