import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const init = async function () {
	mongoose.connect(
		"mongodb+srv://SaveYours:<LFez7zqBHGmiFWCB>@clustersaveyours.h4jgp.mongodb.net/myFirstDatabase",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			auth: { authSource: "admin" }
		}, (err)=> { if(err?console.log(err):console.log("Mongodb infected..."));
		}
	);

}


export default init;