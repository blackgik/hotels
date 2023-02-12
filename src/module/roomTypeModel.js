import mongoose from "mongoose";

const { Schema, model } = mongoose;

const roomType = new Schema({
	name: {
		type: String,
		trim: "true",
		lowercase: true,
		required: true
	}
});

export default model("Room-Type", roomType);
