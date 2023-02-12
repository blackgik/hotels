import mongoose from "mongoose";

const DBURI = process.env.DB_URI;

mongoose.set("strictQuery", false);
mongoose
	.connect(
		DBURI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		{ autoIndex: false }
	)
	.then(() => {
		console.log("database dey very functional🔥");
	})
	.catch((e) => {
		console.log("Database Crash😭", e);
	});
