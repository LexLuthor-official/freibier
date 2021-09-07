import bcrypt from 'bcrypt';
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
});

async function loginByEmail(email, password) {
	const user = await User.findOne({ email });
	if (!user) throw new Error("user not found");

	const isPasswordCorrect = await bcrypt.compare(password.toString(), user.password);
    if (!isPasswordCorrect) throw new Error("password incorrect");

	return { userId: user._id };
}

export default {
	loginByEmail
};