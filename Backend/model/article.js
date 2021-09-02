const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
	link: {
		type: String,
		required: true,
	},
	screenshot: {
		type: String, 
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String, 
		required: true,
	},
}, { versionKey: false });

const Article = mongoose.model("Article", articleSchema);

async function create ({ link, screenshot, title, description }) {
	const article = new Article({
		link,
		screenshot,
		title,
		description,
	});

	return await article.save();
}

async function readAll () {
	const articles = await Article.find();
	return articles;
}

async function readOne (id) {
	return (await Article.aggregate([
		{
			$match: {
				_id: mongoose.Types.ObjectId(id),
			},
		},
		{
            $lookup: {
                from: "guests",
                localField: "_id",
                foreignField: "eventId",
                as: "guests",
            }
        }
	]))[0];
}

async function update (id, { title, date, maxNumberGuests }) {
	const article = await Article.findById(id);
	if (!article) throw new Error("event_not_found");

	article.title = title || article.title;
	article.date = date || article.date;
	article.maxNumberGuests = maxNumberGuests || article.maxNumberGuests;

	return await article.save();
}

async function deleteById (id){
	console.log("deleted by id: ", id);
	return await Article.findByIdAndDelete(id);
}

module.exports = {
	create,
	readAll,
    readOne,
	update,
	deleteById,
};