import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const init = async function () {
	mongoose.connect(
		process.env.MONGODB_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			auth: { authSource: "admin" }
		}, (err)=> { if(err?console.log(err):console.log("Mongodb infected..."));
		}
	);

}


export default init;