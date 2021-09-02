const router = require("express").Router({ mergeParams: true });

const articleController = require("../controller/articles.js");

const articleSchema = require("../schema/article.json");

router.get("/:eventId?", validate(articleSchema.GET), articleController.read);
router.post("/", validate(articleSchema.POST), articleController.create);
router.patch("/:eventId", validate(articleSchema.PATCH), articleController.update);
router.delete("/:eventId", validate(articleSchema.DELETE), articleController.delete);

router.use("/:eventId/articles", articleRouter);

module.exports = router;