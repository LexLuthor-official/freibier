import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
	originalLink: {
		type: String,
		//required: true,
	},
	// shortenLink:{
	// 	type: String,
	// 	required: true,
	// },
	screenshot: {
		type: String, 
		//required: true,
	},
	title: {
		type: String,
		//required: true,
	},
	description: {
		type: String, 
		//required: true,
	},
});

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

export default {
	create,
	readAll
};
